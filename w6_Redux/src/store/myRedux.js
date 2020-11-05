/**
 * 简化版Redux
 * @param {Function} reducer 
 * @param {Object} [initState] 
 */
export function createStore(reducer,initState){
    let state = reducer(initState);
    const listeners = [];
    
    // 获取状态方法
    const getState = function(){
        return state;
    }

    // 修改状态方法
    const dispatch = function(action){
        state = reducer(state,action);

        // 发布
        listeners.forEach(listener=>{
            listener(state);
        })

        return action;
    }

    // 监听状态修改方法
    // 订阅
    const subscribe = function(fn){
        listeners.push(fn);

        // 取消订阅
        return function unsubscribe(){
            listeners = listeners.filter(item=>item!==fn);
        }
    }

    // 替换reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer;
    }
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}

// const reducer = function(state,action){

// }

// const store = createStore(reducer);

// store.getState();//

// const unSubscribe = store.subscribe(function(state){
//     // 这里的代码在State被修改时执行
//      store.getState()
// })
// store.subscribe(function(){
//     // 这里的代码在State被修改时执行
// })
// store.subscribe(function(){
//     // 这里的代码在State被修改时执行
// })

// // 取消监听
// unSubscribe();

// store.dispatch({type:'login',user})

// store.replaceReducer(function(state,action){

// })