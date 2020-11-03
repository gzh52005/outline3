import React from 'react';

import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import { Menu,Row,Col,Button } from 'antd';

// 引入页面组件
import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Mine from './views/Mine'
import Random from './views/Random'
import Add from './views/Add'
import IQ from './views/IQ'
import IQDetail from './views/IQDetail'

import 'antd/dist/antd.css'
import './App.scss';

// function App(props) {
//     console.log('App.props=', props)
//     const menu = [{
//         path: '/home',
//         text: '首页'
//     }, {
//         path: '/mine',
//         text: '我的'
//     }, {
//         path: '/login',
//         text: '登录'
//     }, {
//         path: '/reg',
//         text: '注册'
//     }];

//     const goto = (path) => {
//         props.history.push(path)
//     }
//     return (
//         <div>
//             {/* App
//             <nav>
//                 <ul>
//                     {
//                         menu.map(item => <li key={item.path} onClick={goto.bind(null, item.path)}>
//                             <NavLink 
//                             // activeStyle={{color:'#f00',fontSize:50}}
//                             activeClassName="active"
//                             to={item.path}
//                             >{item.text}</NavLink>
//                             {item.text}
//                         </li>)
//                     }
//                 </ul>
//             </nav> */}
//             <Menu mode="horizontal" theme="dark" selectedKeys={['/home']}>
//                 {
//                         menu.map(item => <Menu.Item key={item.path} onClick={goto.bind(null, item.path)}>
//                             {item.text}
//                         </Menu.Item>)
//                     }
//             </Menu>
//             <Switch>
//                 {/*
//                     当浏览器路径匹配/home时，渲染Home组件
//                 */}
//                 <Route path="/home" component={Home} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/reg" component={Reg} />
//                 <Route path="/mine" component={Mine} />
//                 <Route path="/notfound" render={() => <div>404</div>} />
//                 <Redirect from="/" to="/home" exact />
//                 <Redirect to="/notfound" />
//             </Switch>
//         </div>
//     )
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [{
                path: '/home',
                text: '首页'
            }, {
                path: '/random',
                text: '随机面试题'
            }, {
                path: '/add',
                text: '添加面试题'
            }, {
                path: '/mine',
                text: '我的'
            }],
            currentPath: '/home'
        }

        // this.goto = this.goto.bind(this);
        // this.changeMenu = this.changeMenu.bind(this);
    }
    goto = (path)=> {
        this.props.history.push(path)
    }
    changeMenu = ({key})=>{
        this.setState({
            currentPath:key
        })
    }
    UNSAFE_componentWillMount(){
        // 获取当前路径
        const {pathname} = this.props.location;
        this.setState({
            currentPath:pathname
        })
    }
    componentDidMount(){
        
    }
    render() {console.log('App.props',this.props)
        const { menu, currentPath } = this.state;
        return (
            <div>
                <Row style={{backgroundColor:'#001529'}}>
                    <Col xs={15} sm={16}>
                        <Menu 
                            mode="horizontal" 
                            theme="dark" 
                            selectedKeys={[currentPath]}
                            onClick={this.changeMenu}
                            >
                                {
                                    menu.map(item => <Menu.Item key={item.path} onClick={this.goto.bind(null, item.path)}>
                                        {item.text}
                                    </Menu.Item>)
                                }
                        </Menu>
                    </Col>
                    <Col xs={9} sm={8} style={{textAlign:'right',lineHeight:'46px'}}>
                        <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                        <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                    </Col>
                </Row>
               <div style={{padding:15}}>
                <Switch>
                    {/*
                        当浏览器路径匹配/home时，渲染Home组件
                    */}
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/random" component={Random} />
                    <Route path="/add" component={Add} />
                    <Route path="/iq/:id" component={IQDetail} />
                    <Route path="/iq" component={IQ} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>
                </div>
            </div>
        )
    }
}

const NewApp = withRouter(App)

export default NewApp;