import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { AtButton, AtAvatar,AtTabBar } from 'taro-ui'

import './mine.scss'
import Tabbar from '../../componets/Tabbar'


@inject('store')
@observer
class Index extends Component {
  state = {
    userInfo: {}
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { userInfo } = this.state;
    return (
      <View className='mine'>
        <AtAvatar image={userInfo.avatarUrl} />
        {userInfo.nickName}
        <View style={{ marginBottom: 10 }}>
          <AtButton type='primary' size='normal'>按钮文案</AtButton>

        </View>
        <AtButton type='primary' size='small' openType="getUserInfo" onGetUserInfo={(e) => {
          console.log(e.detail)
          this.setState({
            userInfo: e.detail.userInfo
          })
        }}>获取用户信息</AtButton>

        <Tabbar/>
      </View>
    )
  }
}

export default Index
