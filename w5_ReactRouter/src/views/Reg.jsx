import React from 'react'
import CryptoJS from 'crypto-js';
import { Form, Input, Button, Checkbox,message } from 'antd';
import request from '@/utils/request'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };

const rules = {
    username:[
        { required: true, message: '用户名不能为空' },
        // 自定义校验规则：对象
        {
            validator:function(rule,value){
                return new Promise((resolve,reject)=>{
                    request.get('/user/check',{
                        username:value
                    }).then(res=>{
                        if(res.status === 400){
                            reject('用户名已存在')
                        }else if(res.status === 200){
                            resolve()
                        }
                    })

                })
            },
            // validateTrigger:'change'
        }
    ],
    password:[
        { required: true, message: '密码不能为空' },
        { min:6,max:12, message: '密码必须为6-12个字符' },
    ],
    confirmPassword:[
        { required: true, message: '密码不能为空' },

        // 自定义校验规则：函数
        function(form){
            return {
                validator:function(rule,value){
                    if(value !== form.getFieldValue('password')){
                        return Promise.reject('两次输入密码不一致')
                    }
                    return Promise.resolve();
                }
            }
        }
        //   ({ getFieldValue }) => ({
        //     validator(rule, value) {
        //       if (!value || getFieldValue('password') === value) {
        //         return Promise.resolve();
        //       }

        //       return Promise.reject('The two passwords that you entered do not match!');
        //     },
        //   })
    ]
}

function Reg(props){
    const onFinish = async (values)=>{
        console.log('finish=',values)
        let {username,password} = values;
        password = CryptoJS.SHA256(password).toString()
        console.log('password=',password)

        // 注册
        const data = await request.post('/user/reg',{
            username,
            password
        });

        console.log('data=',data)
        if(data.status === 200){
            props.history.replace({
                pathname:'/login',
                state:{
                    username
                }
            })
        }
    }
    return (
        <div>
            <h1>免费注册</h1>
            <Form
                labelCol={layout.labelCol}
                wrapperCol={layout.wrapperCol}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    hasFeedback
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
                    label="确认密码"
                    name="confirmPassword"
                    rules={rules.confirmPassword}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">注册</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Reg;