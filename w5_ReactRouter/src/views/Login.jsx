import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };

function Login(props) {
    console.log('Login.props=', props)
    const onFinish = function(values){
        console.log(values)
    }
    return (
        <div>
            <h1>免费登录</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '用户名不能为空' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '密码不能为空' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>下次免登陆</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Login;