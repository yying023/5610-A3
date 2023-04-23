const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();
const axios = require("axios");
const lodash = require("lodash");

const moment = require("moment");
router.get("/getRateList", async function(req, res){
  axios.get("https://freeforexapi.com/api/live").then(info=>{
    res.json(info.data);
  })
});
router.get("/getRateValue", async function(req, res){
  const {country} = req.query;
  // const rateData = await axios.get("https://www.freeforexapi.com/api/live?pairs=USDCAD");
  // const baseRate = lodash.get(rateData,"data.rates.USDCAD.rate");
  axios.get(`https://www.freeforexapi.com/api/live?pairs=${country}`).then(info=>{
    const currentRate = lodash.get(info,`data.rates.${country}.rate`);
    // const baseCadRate = (currentRate/baseRate).toFixed(3);
    res.json({
      data:currentRate
    });
  })
});
router.post("/add-transaction", async function (req, res) {
  try {
    console.log('add transaction requested', req)
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/edit-transaction", async function (req, res) {
  try {
    console.log('edit transaction requested', req)
    await Transaction.findOneAndUpdate({_id : req.body.transactionId} , req.body.payload)
    res.send("Transaction Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/delete-transaction", async function (req, res) {
  try {
    console.log('delete transaction requested', req)
    await Transaction.findOneAndDelete({_id : req.body.transactionId})
    res.send("Transaction Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/get-all-transactions", async (req, res) => {
  const { frequency, selectedRange , type } = req.body;
    console.log('get all transactions requested', frequency, selectedRange, type)
  try {
    const transactions = await Transaction.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedRange[0],
              $lte: selectedRange[1],
            },
          }),
      userid: req.body.userid,
      ...(type!=='all' && {type})
    });

    res.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
