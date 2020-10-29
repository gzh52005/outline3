import React from 'react';

import {HashRouter,BrowserRouter,Route,Redirect,Switch,Link,NavLink} from 'react-router-dom';

// 引入页面组件
import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Mine from './views/Mine'

import './App.scss';

function App(){
    const menu = [{
        path:'/home',
        text:'首页'
    },{
        path:'/mine',
        text:'我的'
    },{
        path:'/login',
        text:'登录'
    },{
        path:'/reg',
        text:'注册'
    }]
    return (
        <div>
            App
            <nav>
                <ul>
                    {
                        menu.map(item=><li key={item.path}>
                            <NavLink 
                            // activeStyle={{color:'#f00',fontSize:50}}
                            activeClassName="active"
                            to={item.path}
                            >{item.text}</NavLink>
                        </li>)
                    }
                </ul>
            </nav>
            <Switch>
                {/*
                    当浏览器路径匹配/home时，渲染Home组件
                */}
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/mine" component={Mine} />
                <Route path="/notfound" render={()=><div>404</div>} />
                <Redirect from="/" to="/home" exact/>
                <Redirect to="/notfound"/>
            </Switch>
        </div>   
    )
}

export default App;