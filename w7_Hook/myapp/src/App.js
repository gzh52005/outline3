import logo from './logo.svg';
import './App.css';

// 按需引入（一般使用babel-plugin-import工具帮助我们实现按需加载）
// import Button from 'antd/lib/button/button'
// import 'antd/lib/button/style/index.css'

// 新版本antd的按需引入
// import {Button} from 'antd';
// import 'antd/dist/antd.css'

import Hook from './components/Hook'
import MyHook from './components/MyHook'

function App() {
  return (
    <div className="App">
      <Hook/>
      <MyHook/>
    </div>
  );
}

export default App;
