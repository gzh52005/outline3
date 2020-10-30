/**
 * 高阶组件
    * 把组件作为参数传入
    * 返回一个新的组件
    
    * 注意：封装高阶组件一定要传递props
* 高阶组件定义方式
    * 定义方式一： 属性代理
    * 定义方式二： 反向继承
        > 一般用于类组件
 */
import React from 'react';
import {Redirect} from 'react-router-dom'

 export function withUser(InnerComponent){
    return function OuterComponent(props){
        console.log('OuterComponent.props=',props)
        let data = localStorage.getItem('currentUser');
        let currentUser
        try{
            currentUser = JSON.parse(data);
        }catch(err){
            currentUser = data;
        }
        return <InnerComponent {...props} user={currentUser} />
    }
 }

// 加强版
// 练习：加强版2.0
export function withStorage(key){
    return function(InnerComponent){
        return function OuterComponent(props){
            let data = localStorage.getItem(key);
            try{
                data = JSON.parse(data);
            }catch(err){
                data = data;
            }
            const storage = {
                [key]:data
            }
            return <InnerComponent {...props} {...storage}  />
        }
    }
}


export function withAuth(InnerComponent){
    @withUser
    class OuterComponent extends InnerComponent{
        render(){
            console.log('withAuth.props=',this.props);
            const {user} = this.props;
            if(user){
                return super.render()
            }
            return <Redirect to="/login" />
        }
    }
    // OuterComponent = withUser(OuterComponent)
    return OuterComponent
}