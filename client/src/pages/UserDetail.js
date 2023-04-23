import {Button, Descriptions} from "antd";
import React from "react";
const operateConst = {
    none:"none",
    edit:"edit"
}
const UserDetail = ({setOperate, user, authUser}) => {
    return (
        <div>
            <Descriptions title={<span>My Profile
                <Button type="primary" style={{marginLeft:10}}
                        onClick={()=>{
                            setOperate(operateConst.edit);
                        }}>Edit
                </Button>
            </span>} bordered >
                <Descriptions.Item label="User Name">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
            </Descriptions>

        </div>
    );
};

export default UserDetail
