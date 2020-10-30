import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <HashRouter>
        <App/>
        {/* <Route component={App} /> */}
    </HashRouter>
    ,
    document.querySelector('#app')
)

