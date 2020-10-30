import React from 'react'

function Home(props){
    console.log('Home.props',props)
    const goto = function(path){
        props.history.push(path)
    }
    return (
        <div>
            Home
            <button onClick={goto.bind(null,'/login')}>登录</button>
            <button onClick={goto.bind(null,'/reg')}>注册</button>
        </div>
    )
}


export default Home;