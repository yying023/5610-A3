import React, { useEffect } from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios'

function Register() {
    const navigate = useNavigate(true)
    const onFinish = async(values)=>{
        console.log(values)
        try {
            await axios.post('api/users/register', values)
            message.success('Registration Successful')
            navigate('/login')
        } catch (error) {
            if (error.response.data === 'error-email is taken already'){
                message.error('This Email Is Already Registered.')
            } else if (error.response.data === 'error-email is not valid'){
                message.error('Email is not valid.')
            } else {
                message.error('Something went wrong')
            }
        }
    }

    // 这一块我也不知道是干嘛的
    useEffect(() => {
      if(localStorage.getItem('spendsmart.user')){
        navigate("/");
      }
    }, []);
    


    return (
        <div className='register'>
            <div className='row justify-content-center align-items-center w-100 h-100'>
                <div className='col-md-5'>
                    <div className='lottie'>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_2k254YVPV1.json" 
                        background="transparent" 
                        speed="1" style={{ height: '350px', width: '350px' }} 
                        loop 
                        autoplay>
                    </lottie-player>
                    </div>
                </div>
                <div className='col-md-5'>
                    <h1>SpendSmart - Register</h1>
                    <Form layout='vertical' onFinish = {onFinish}>
                        <Form.Item label='Username' name='username'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input type='password'/>
                        </Form.Item>

                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/login'>Already Registered? Click Here To Login</Link>
                            <button className='primary' type='submit' >REGISTER</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}



export default Register
