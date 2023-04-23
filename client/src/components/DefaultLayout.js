import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import '../resources/defaultLayout.css'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function DefaultLayout(props) {
  const { logout } = useAuth0();
  const user = JSON.parse(localStorage.getItem('spendsmart.user'))
  const navigate = useNavigate()
  const items = [
    {
      key: '1',
      label: (
        <li onClick={()=>{
          localStorage.removeItem('spendsmart.user')
          logout({ logoutParams: { returnTo: window.location.origin } });
          // navigate("/login");
        }}>Logout</li>
      ),
    },
    {
      key: '2',
      label: (
        <li target="_blank" rel="noopener noreferrer"
           onClick={()=>{
               navigate("/profile");
           }}>
          Profile
        </li>
      ),
    },
    {
      key: '3',
      label: (
        <li onClick={()=>{ 
          navigate("/main");
        }}>Main</li>
      ),
    }
  ];
  return (
    <div className='layout'>
      <div className='header d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='logo'> SpendSmart</h1>
        </div>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <button className='login_username'>{user.username}</button>
        </Dropdown>
      </div>
      <div className='content'>
        {props.children}

      </div>

    </div>
  )
}

export default DefaultLayout
