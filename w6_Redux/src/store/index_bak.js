import {createStore} from 'redux'

let currentUser = localStorage.getItem('currentUser');
try{
    currentUser = JSON.parse(currentUser) || {}
}catch(err){
    currentUser = {}
}

const initialState = {
   ...currentUser
}

// reducer是一个纯函数，这个函数由内部调用，调用时传入state和action
// reducer必须返回一个新的状态state
const reducer = function(state=initialState,action){
    let newState;
    // 根据action命令执行不同的操作
    switch(action.type){
        case 'login':
            newState = action.user;

            // 存入本地
            if(action.remember){
                localStorage.setItem('currentUser',JSON.stringify(newState))
            }else{
                sessionStorage.setItem('currentUser',JSON.stringify(newState))
            }
            return newState;
        case 'logout':
            localStorage.removeItem('currentUser')
            sessionStorage.removeItem('currentUser')
            return {}
        case 'change_password':
            newState = {...state,password:action.password}
            return newState;
        case 'change_role':
            newState = {...state,role:action.role}
            return newState;
        default:
            return state;
    }

}

// 2. 创建仓库
const store = createStore(reducer)

// 监听数据修改
// store.subscribe(function(){
//     // 这个函数在state被修改时执行
//     console.log('statechange=',store.getState())
// })

// console.log('store=',store);
// console.log('state=',store.getState());
// // 修改
// const action = {type:'change_password',password:'laoxie123'}
// store.dispatch(action)

// console.log('newstate=',store.getState());

export default store