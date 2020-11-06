import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import mySaga from './middlewares/mySaga'

// 1. 安装并引入
import createSagaMiddleware from 'redux-saga'

 // 2.创建saga中间件
 const sagaMiddleware = createSagaMiddleware();

 // 3.将 sagaMiddleware 连接至 Store
 let enhancer = applyMiddleware(sagaMiddleware)


// const reduxDevToolsMiddleware = composeWithDevTools(enhancer);
const store = createStore(reducer,compose(enhancer,composeWithDevTools()));

// 4.引入并运行自定义Saga配置
sagaMiddleware.run(mySaga);

export default store;
console.log('state',store.getState())