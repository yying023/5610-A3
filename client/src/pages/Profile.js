import {Form, Input, Button, Card, Descriptions, message} from "antd";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import lodash from "lodash";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetail from "./UserDetail";
import UserForm from "./UserForm";
import "../resources/Profile.css";


const operateConst = {
    none:"none",
    edit:"edit"
}
function Profile() {
    const { user:authUser, isAuthenticated, isLoading } = useAuth0();
    const [loading, setLoading] = useState(false);
    const [operate, setOperate] = useState(operateConst.none);
    const navigate = useNavigate()

    useEffect(() => {
        // if(localStorage.getItem('spendsmart.user')){
        //     navigate("/main");
        // }
    }, []);

    const user = JSON.parse(localStorage.getItem('spendsmart.user'));
    return (
        <DefaultLayout>
            <div className="profile">
                {operate===operateConst.none&&<UserDetail setOperate={setOperate} user={user} authUser={authUser}/>}
                {operate===operateConst.edit&&<UserForm setOperate={setOperate}  user={user}
                                                        successCall={async(data)=>{
                                                            const response = await axios.post('/api/users/changeUserInfo', data);
                                                            if(response.data.status==="success"){
                                                                // show save successfully!
                                                                message.success('save successfully!');
                                                                localStorage.setItem('spendsmart.user', JSON.stringify({...response.data.data, password: ""}))
                                                                setOperate(operateConst.none);
                                                            }
                                                        }}
                                                        />}
            </div>
        </DefaultLayout>
    );
}

export default Profile;
