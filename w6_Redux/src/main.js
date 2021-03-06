import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';

import store from './store'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
            {/* <Route component={App} /> */}
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)

