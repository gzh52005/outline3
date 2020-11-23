import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'
console.log('Taro=',Taro)

import Tabbar from '../../componets/Tabbar'

import './index.scss'

const app = Taro.getApp(); // 得到app实例
console.log('app=',app)

// 给组件props注入数据
@inject('store')

// 监听注入数据的修改，当数据有修改时自动刷新组件
@observer
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  remove = (id)=>{
    const { cart } = this.props.store
    cart.remove(id)
  }
  add = ()=>{
    const { cart } = this.props.store;
    const newGoods = {id:2,name:'goods2',price:1998,qty:1}
    cart.add2cart(newGoods)
  }

  render () {
    console.log('index.props=',this.props);
    const { counter: { counter },cart } = this.props.store
    return (
      <View className='index'>
       <View>购物车信息</View>
       {
         cart.goodslist.map(item=>{
         return <View key={item.id}>
           {item.name}
         <View>{item.price} &times; {item.qty}</View>
         <Button onClick={this.remove.bind(this,item.id)}>删除</Button>
           </View>
         })
       }
       <View>
         <Button onClick={this.add}>添加</Button>
       </View>
       <Button onClick={()=>{
         Taro.navigateTo({
           url:'/pages/mine/mine'
         })
       }}>跳转到mine</Button>

       <Tabbar/>
      </View>
    )
  }
}

export default Index
