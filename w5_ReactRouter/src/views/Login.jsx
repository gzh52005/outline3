import React from 'react'
import CryptoJS from 'crypto-js';console.log('CryptoJS=',CryptoJS)
import { Form, Input, Button, Checkbox,message } from 'antd';
import request from '@/utils/request'
import {searchFormat} from '@/utils'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };

const rules = {
    username:[
        { required: true, message: '用户名不能为空' }
    ],
    password:[
        { required: true, message: '密码不能为空' }
    ]
}

function Login(props) {
    console.log('Login.props=', props)
    const defaultUsername = props.location.state ? props.location.state.username : ''
    const onFinish = async function(values){
        const password = CryptoJS.SHA256(values.password).toString();
        console.log('password=',password)

        const data = await request.get('/user/login',{
            ...values,
            password
        });
        console.log('data=',data);
        if(data.status === 200){
            
            if(values.remember){
                localStorage.setItem('currentUser',JSON.stringify(data.data))
            }else{
                sessionStorage.setItem('currentUser',JSON.stringify(data.data))
            }
            const {redirectTo} = searchFormat(props.location.search)
            console.log('redirectTo=',redirectTo)
            props.history.push(redirectTo || '/mine');
        }else if(data.status === 400){
            message.error('用户名或密码错误')
        }
    }
    return (
        <div>
            <h1>免费登录</h1>
            <Form
                //{...layout}
                labelCol={layout.labelCol}
                wrapperCol={layout.wrapperCol}
                name="basic"
                initialValues={{ remember: true,username:defaultUsername }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item 
                //{...tailLayout}
                wrapperCol={tailLayout.wrapperCol}
                name="remember" 
                valuePropName="checked"
                >
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