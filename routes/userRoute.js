const express = require('express')
const User = require('../models/User')
const router = express.Router()


router.post('/login', async function (req, res) {
    try {
        const searchEmail = req.body.email
        if (!searchEmail.includes("@")){
            console.log("2")
            res.status(500).json("error-invalid email")
        }else{
            const result = await User.findOne({
                email : req.body.email,
                password : req.body.password
                });
            if (result) {
                res.send(result)
            } else {
                res.status(500).json("error-email and password doesn't match")
            }
        }

    } catch (error) {
        res.status(500).json(error)
    }
})
router.post('/changeUserInfo', async function (req, res) {
    try {
        const { id, username, email } = req.body; // 获取更新的信息
        // 根据id更新用户信息
        const updatedUser = await User.findByIdAndUpdate(id, { username, email }, { new: true });
        res.send({
            status:"success",
            data:updatedUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

router.post('/register', async function (req, res) {
    try {
        console.log('register request')
        const checkExist = await User.findOne({
            email: req.body.email
        })
        if (! checkExist){
            const newEmail = req.body.email;
            if (!newEmail.includes("@")){
                console.log("email is not valid")
                res.status(500).json('error-email is not valid')
            } else {
                const newUser = new User(req.body);
                await newUser.save();
                res.send(newUser);
            }
        } else {
            console.log("email is taken")
            res.status(500).json('error-email is taken already')
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router;
