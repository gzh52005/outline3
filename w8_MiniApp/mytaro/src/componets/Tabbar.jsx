import React from 'react';
import Taro from '@tarojs/taro'
import {AtTabBar} from 'taro-ui'

const app = Taro.getApp()

class Tabbar extends React.Component{
    state = {
        current:0,
        tabList:[
            { title: '首页', iconType: 'home', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '我的', iconType: 'user', text: '16', max: 99 }
        ]
    }
    changeTab=(index)=>{
        console.log('index=',index)

        this.setState({
            current:index
        });

        Taro.switchTab({
            url:'/'+app.config.pages[index]
        })
    }
    render(){
        const {tabList,current} = this.state;
        return (
            <AtTabBar
                tabList={tabList}
                onClick={this.changeTab}
                current={current}
            />
        )
    }
}

export default Tabbar;