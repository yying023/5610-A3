import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useAuth0 } from "@auth0/auth0-react";


function Login() {
    const [loading, setLoading] = useState(false);
    const { loginWithRedirect } = useAuth0();

    const navigate = useNavigate()
    const onFinish = async(values) => {
       try {
        setLoading(true);
        const response = await axios.post('/api/users/login', values)
        localStorage.setItem('spendsmart.user', JSON.stringify({...response.data, password: ""}))
        setLoading(false);
        message.success('Login successful')
        // navigate('/main')
           loginWithRedirect();
    } catch (error) {
        setLoading(false);
        if (error.response.data === "error-email and password doesn't match"){
            message.error("Login Failed - email and password doesn't match")
        } else if (error.response.data === "error-invalid email"){
            message.error('Login Failed - invalid email')
        } else {
            message.error('Login Failed')
        }
       }
    }

    useEffect(() => {
        if(localStorage.getItem('spendsmart.user')){
          navigate("/main");
        }
      }, []);


    return (
        <div className="register">
          {loading && <Spinner />}
          <div className="row justify-content-center align-items-center w-100 h-100">
            <div className="col-md-5">
            <h1>SpendSmart - Login</h1>
              <Form layout="vertical" onFinish={onFinish}>

                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input type="password" />
                </Form.Item>

                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/register">
                    Not Registered Yet , Click Here To Register
                  </Link>
                  <button className="primary" type="submit">
                    LOGIN
                  </button>
                </div>
              </Form>
            </div>
            <div className="col-md-5">
              <div className="lottie">
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_1sagcjai.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Login;
