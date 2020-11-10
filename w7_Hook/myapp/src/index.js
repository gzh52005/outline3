import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {Provider} from './store'

// import context from './context'
// import store from './store'

ReactDOM.render(
  // <context.Provider value={store}>
  <Provider>
    <App />
  </Provider>,
  // </context.Provider>,
  document.getElementById('root')
);
