import {takeEvery,takeLatest,put,call,apply} from 'redux-saga/effects' 
import request from '../../utils/request'
import {message} from 'antd'
import {CHANGE_QTY} from '../actions/cart'

function* changeQty(action){
    let {id,qty} = action;
    // 请求库存
    // const {data} = yield request.get('/goods/kucun',{
    //     id
    // });

    // 为了方便测试
    const {data} = yield call(request.get,'/goods/kucun',{
        id
    })

    if(qty > data.kucun){
        qty = data.kucun
        message.warn('库存不足');
    }
    yield put({type:CHANGE_QTY,id,qty})
}

function* main(){
    console.log('hello saga')
    // 监听saga action
    // 当触发dispatch({type:'CHANGE_QTY_ASYNC'})，执行changeQty方法
    // yield takeEvery('CHANGE_QTY_ASYNC',changeQty)
    yield takeLatest(CHANGE_QTY+'_ASYNC',changeQty) // 做了防抖操作
    // yield takeLatest('GET_USER_ASYNC', getUser) // 做了防抖操作
}


export default main

// react组件中，
// dispatch({type:'CHANGE_QTY_ASYNC',id,qty})

