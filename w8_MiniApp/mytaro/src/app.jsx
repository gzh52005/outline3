import React, { Component } from 'react'
import { Provider } from 'mobx-react';// 这个工具的作用等效于react-redux

import {request} from './utils';
console.log('request=',request)

import store from './store'

import 'taro-ui/dist/style/index.scss'
import './app.scss'



class App extends Component {
  // 自定义属性/方法
  state = {
    
  }

  onLaunch(){

  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
