import {Button, Card, Form, Input} from "antd";
import React from "react";
import lodash from "lodash";

const operateConst = {
    none:"none",
    edit:"edit"
}
export const UserForm = ({setOperate, user, successCall}) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const data = {
            id: user._id,
            username: values.username,
            email: values.email
        }
        successCall(data);

    };

    return (
        <Card title="User Detail">
            <Form
                initialValues={lodash.pick(user,["username","email"])} // 设置初始值
                form={form} onFinish={onFinish}>
                <Form.Item label="User Name" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button  onClick={()=>{setOperate(operateConst.none)}}>
                        Cancel
                    </Button>
                    <Button style={{marginLeft:10}} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
export default UserForm;
