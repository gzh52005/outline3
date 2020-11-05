import {createStore} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
const reduxDevToolsMiddleware = composeWithDevTools();console.log('reduxDevToolsMiddleware=',reduxDevToolsMiddleware)
const store = createStore(reducer,reduxDevToolsMiddleware);

export default store;
console.log('state',store.getState())