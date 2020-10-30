import React from 'react'

function Login(props){
    console.log('Login.props=',props)
    return (
        <div>
            Login
            <button onClick={()=>{
                const user = {username:'laoxie',password:123456,role:'admin'}
                localStorage.setItem('currentUser',JSON.stringify(user))
            }}>登录</button>
        </div>
    )
}


export default Login;