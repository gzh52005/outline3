import {combineReducers} from 'redux'
import userReducer from './user';
import cartReducer from './cart';
import commonReducer from './common';

// 把多个reducer组合成一个reducer
const reducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    common:commonReducer
})

export default reducer