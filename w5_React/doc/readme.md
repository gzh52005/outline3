# React

## day5-1

### 面试题
* 模块化规范的区别
    * commonJS
    ```js
        // commonJS是同步的
        const express = require()
        const app = express()
    ```
    * AMD
    * CMD
    ```js
        // amd&cmd异步
        require(['jquery'],($)=>{
            $('.box')
        });
    ```
    * ESModule
    ```js
        // ESModule静态引入
        import axios from 'axios'
        axios.get()
    ```


### 知识点
* 模块化开发规范
    * commonJS(cjs)      NodeJS
    ```js
        // 引入
        require()

        // 导出
        module.exports
        exports
    ```
    * AMD           require.js
    ```js
        // 引入
        require()

        // 定义模块
        define()
    ```
    * CMD           sea.js
    * ESModule      ECMAScript
    ```js
        // 定义导出
        export

        // 引入
        import 
    ```
    * umd   通用模块（支持AMD/CMD/全局引入）

* 使用React
    1. 引入`react.js`,`react-dom.js`
    2. 渲染：`ReactDOM.render(vNode,target)`
        * vNode：通过`React.createElement()`创建
    3. 创建节点：`React.createElement(type,props,children)`
* JSX
    * 浏览不支持JSX（浏览器会忽略掉不识别的script标签内容）
    * JSX规则
        * 不能使用js关键字
            * class -> className
            * for   -> htmlFor
            * ...
        * 闭合标签
            * img
            * input
        * 属性使用驼峰
            * onclick -> onClick
            * onkeyup   -> onKeyUp
            * ...
        * 在JSX中编写js代码必须写在花括号`{}`内
        * style 属性的值接收一个对象
        * JSX中注释：使用花括号变成js代码再注释
* React 组件
    > 在开发过程中，我们需要有组件化开发（模块化开发）的思维，
    * 分类
        * 函数组件（无状态组件）
        * 类组件（状态组件）
            * state
                * 获取：this.state
                * 修改：this.setState()
                    > 谁的数据谁修改，创建新的数据覆盖旧数据
            * render方法和生命周期函数中this默认执行实例，其他函数默认没有this指向
* 状态提升
    * 把数据放到多个组件共同的父级

* 组件通讯
    * 父->子：props
        1. 给子组件定义属性并传递数据（如：datalist）
        2. 在子组件通过`props.xxx`使用
            * 获取props
                * 函数组件：函数的第一个参数为props
                * 类组件：this.props
    * 子->父：props
        > 利用props把父组件的**方法**传到子组件执行
        1. 给子组件定义属性并传递方法
        2. 子组件执行传入方法，并传递参数

* 事件绑定
    * 事件名必须使用驼峰
    * 事件处理函数默认没有this指向，需要手动绑定
        * render中绑定this
        * constructor中绑定（推荐）
    * event事件对象
        > 事件处理函数的最后一个参数
        * e.target和e.currentTarget区别
            * target: 事件源对象（触发事件的元素）
            * currentTarget：绑定事件的元素
* 表单元素
    * 非受控组件：通过节点操作表单元素的值
    * 受控组件：利用React组件的状态控制表单元素的值
* ref
    * 回调函数写法
    ```js
        <button ref={el=>this.el=el}>点我</button>
    ```

## day5-2

### 面试题
* call、apply、bind的异同
    * 共同点
        * 都能改变this指向
        * 都是函数的原型方法
    * 不同点
        * call和apply都会调用函数，bind不会调用
        * call和apply得到函数的返回值，bind得到一个新的函数
        * bind改变this指向只认第一次
        * apply只能传递一个参数，参数只能为数组，call和bind传递参数一致
        ```js
            fn.apply(window,[1,2,3,4])
            fn.call(window,1,2,3,4)
            fn.bind(window,1,2,3,4)
        ```

### 复习
* 模块化规范
    * commonJS
    * AMD/CMD
    * ESModule
* JSX
    > 原理：React.createElement创建的虚拟节点
    * 规则
    * 编译规则
        * 遇到尖括号以html方式解析
        * 遇到花括号以js方式解析
* 组件
    * 函数组件（无状态组件，UI组件）
        * 必须有返回值
    * 类组件（状态组件，容器组件）
        * 必须包含render
        * render必须有返回值
        * this
        * state
    * 组件通讯
        * 父->子：props
            1. 父组件操作：给子组件定义属性并传递数据
            2. 子组件操作：获取
                * 函数组件：函数的第一个参数
                * 类组件：this.props
        * 子->父：props
            1. 父组件操作：给子组件定义属性并传递方法
            2. 子组件操作：接收父组件传入的方法并执行（执行时可传递数据）
* react 组件的数据挂载方式
    * 数据挂载：{}
    * 条件渲染：三元运算
    * 列表循环
        * map()
        * filter()
    * 事件绑定
        * 事件名使用驼峰写法
        * this指向
            * bind
        * event: 事件处理函数的最后一个参数
        * 事件处理函数传参
            * bind
    * ref
        * 回调函数

* props
    * 获取
        * 函数组件：函数的第一个参数
        * 类组件：
            * this.props
            * constructor的第一个参数
    * chilren：一般用户组件封装
        * undefined：单标签或双标签空内容
        * Object：只有一个子元素
        * Array:多个子元素
    > PS：不要尝试去修改props的数据
* state
    * 获取：this.state.xxx
    * 修改：this.setState()
        > 修改规则：创建新数据覆盖旧数据
        


### 知识点
* react组件什么时候会刷新
    1. state改变
    2. props改变

* 组建通讯
    * 父->子：props
    * 子->父：props
    * 兄弟->兄弟：状态提升（把数据放到他们共同的父级）
    * 深层次组件通讯
        * 逐层传递（不推荐）
        * Context
            1. 创建context：
                ```js
                    // defaultData：默认共享数据，缺少第二步时就得到defaultData
                    const Context = React.createContext(defaultData)
                ```
            2. 父组件操作：Provider共享数据
                ```js
                    <Context.Provider value="共享的数据">
                        // 子组件
                    </Context.Provider>
                ```
            3. 子组件操作：
                * Consumer接收数据：适用于函数组件与类组件

                    ```js
                        <Context.Consumer>
                            {
                                (value)=>{

                                }
                            }
                        <Context.Consumer>
                    ```
                * this.context接收数据：只能用在类组件中
                    ```js
                        // 给类组件添加静态属性contextType，值为Context

                        TodoFrom.contextType = Context;
                    ```
                * 只适用于函数组件的方式