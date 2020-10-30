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
* hash路由的原理
    > 核心：window.onhashchange（事件触发条件）
    ```js

    ```
* webpack与gulp的区别
    * gulp是基于任务的构建工具，webpack是基于配置的构建工具

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

* 从0搭建基于webpack的React环境
    * 创建目录
        * dist
        * public
        * src
        * webpack.config.js
        * package.json
    * 安装依赖
        * react & react-dom
        * webpack & webpack-cli & webpack-dev-server
        * @babel/core & babel-loader & @babel/preset-react
        * html-webpack-plugin
    * 配置webpack： webpack是一个基于配置的构建工具
        > 在根目录下创建webpack.config.js（webpack配置文件），webpack配置文件是一个遵循commonJS规范模块
        ```js
            module.exports = {
                // webpack配置
            }
        ```
    * webpack的工作原理：
* npm script
    * package.json下的scripts配置

## day5-3

### 面试题
* vue组件局部样式实现的原理
    * 添加了scoped属性的组件会给组建内所有的html标签添加`data-v-[hash]`自定义属性，并把样式编译成属性选择器，达到只有当前组件才能匹配的样式
    ```js
        // home.vue
        <template></template>
        <script></script>
        <style scoped>
            button{color:#f00}
        </style>
    ```
* Vue/React中key的作用
    * 使用key的场景：同级别同类型的节点
    * 虚拟DOM
        * diff算法：对比前后状态（对象）,找出差异项，只更新差异部分内容
    * key作用：用于识别虚拟节点，让diff算法更加高效

    ```js
        this.price = 100
        this.price = 10
        this.price = 100

        {
            id:10,
            price:100
            name:'xxx'
        }

        {
            id:10,
            price:10,
            name:'xxx'
        }

    ```
* 影响页面性能的因素
    * 节点的数量
    * 节点的频繁操作
    * 事件数量
    * ....

### 复习
* webpack
    * 工作原理：把项目当做一个整体，通过入口文件（如：index.js）分析整个项目结构，找到所有依赖模块，并利用配置好的加载器、插件处理这些模块，最后打包为一个（或多个）浏览器可识别的文件
    * 常用配置
        * entry
        * output
        * loader
            > module.rules
        * devServer
            * contentBase
            * port
            * proxy
        * plugins
* 从0配置基于webpack的React项目环境
    * 创建目录
    * 安装依赖
        * react + react-dom
        * webpack + webpack-cli + webpack-dev-server
        * @babel/preset-react + babel-loader + @babel/core
        * html-webpack-plugin
    * npm script
        > 运行格式: `npm run xxx`
        * test
            * 单元测试
            * 点对点/端对端测试
        * start

### 知识点
* setState
    * setState(nextState[,callback])
    * setState(()=>{return nextState}[,callback])


#### 模块化开发
* 模块化开发规范
    * commonJS
    * AMD/CMD
    * ESModule

* 为什么需要模块化开发
    * 分工
    * 迭代
    * 复用
* javascript以前是没有模块化，所以需要使用第三方工具来实现模块化，直到ES6的出现，ES6带来了模块化开发规范：ESModule
    * require.js
    * sea.js
* 对于不支持ESModule的浏览器，可以使用webpack/gulp等构建工具编译成浏览器支持的代码

* ES Module
    > 注意：需要在服务器的环境下才能使用，ESModule规范把每个文件当作一个模块（**模块对象**），一个模块就是一个对象，每一个模块作用域是独立，要使用内部的变量，必须导出（export）并引入（import）
    * 使用方式
        * html文件中使用（需要浏览器支持ESModule）
        * webpack中使用（webpack会编译成浏览器支持的代码）
    * 引入：import 
        > url只能是相对路径或绝对路径
        ```js
            import request form url       // 引入模块对象中的default属性
            import {username} from url    // 引入模块对象中的username属性
            import {username as name} from url  // 引入模块对象中的username属性并改名为name
        ```
    * 导出：export
        > export后只能跟：let,const,var,function,class,default,{}
        * default比较特殊，使用default后引入的方式与其他不一样
        ```js
            export let username='laoxie' ;  // 给<模块对象>添加username属性
            export function getData(){}     // 给模块对象添加getData方法
            export class person{}           // 给模块对象添加person属性
            export default request          // 给模块对象添加default属性
            export {a,b}                    // 给模块对象添加a属性和b属性(批量添加)
        ```

#### 生命周期函数(钩子函数)
> 组件从创建到销毁的过程，只能在类组件中使用

* 初始化阶段
    * constructor()
* 挂载阶段
    * componentWillMount（不推荐）
    * componentDidMount         
* 更新阶段
    * componentWillUpdate（不推荐）       
    * componentDidUpdate        
* 销毁阶段
    * componentWillUnmount      
* 特殊生命周期函数
    * componentWillReceiveProps（不推荐）
    * shouldComponentUpdate
        > 必须返回一个Boolean（默认返回true），一般用于性能优化

> 注意：了解每个生命周函数的执行过程，每个生命周期函数适合做什么操作

## day5-4

### 面试题
* for/for..in/for..of的区别
```js
    // v-for="item in arr"
    // for一般用于数组遍历
    // for...in一般用于对象遍历
    // for...of一般用于具有迭代特性的数据
```
* getElementsByTagName与querySelectorAll区别
```js
    let links1 = document.getElementsByTagName('a'); //HTMLCollection：105 -> 106
    let links2 = document.querySelectorAll('a'); //NodeList: 105 -> 105

    document.body.appendChild(document.createElement('a'))
    links1.forEach();// forEach is not a function
    linkss.forEach();// 可以遍历
```
* jquery中attr()与prop()方法的区别
    * attr()对应原生js中的**getAttribute()/setAttribute()**：用于获取/设置html属性
    * prop()对应原生js中的**点语法**：用于获取/设置节点属性
    ```js
        // <a href="http://laoxie.com"></a>
        let link = document.querySelector('a');
        link.getAttribute('href');//得到：http://laoxie.com，等效于link.href
        link.setAttribute('href','http://jingjing.com');// 设置属性，等效于link.href='http://jingjing.com'

        <input type="checkbox" checked>
        $('input').attr('checked','checked')
        $('input').prop('checked',true);
    ```
* jquery中链式调用的原理
    ```js
        $('a').addClass('link').attr('username','laoxie').on('click',()=>{
            
        })

        jQuery.prototype.addClass = function(){

            return this
        }

        jQuery.prototype.attr = function(){
            return this
        }
        jQuery.prototype.on = function(){
            return this
        }   
    ```
* 前端的本地存储方式
    * cookie
    * webStorage
    * indexDB
    * webSQL
```js
    // 跨域cookie
    Access-Control-Allow-Origin="*"
    // Access-Control-Allow-Methods
    // Access-Control-Allow-Headers
    Access-Control-Allow-Credentials = true

    const xhr = new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.withCredentials = true;
    xhr.send()
    
    // axios
    axios.get(url,{
        ...
       withCredentials:true
    })
    
    // fetch
    fetch(url,{
        ...
        credentials: 'include'
    })
```

### 复习
* key的作用
    * 虚拟DOM（diff算法）
* 生命周期： 类组件
    * 初始化节点
        * constructor()
    * 挂载阶段
        * componentWillMount -> UNSAFE_componentWillMount （不推荐）
        * componentDidMount
    * 更新阶段
        * componentWillReceiveProps -> UNSAFE_componentWillReceiveProps （不推荐）
        * shouldComponentUpdate
        * componentWillUpdate -> UNSAFE_componentWillUpdate （不推荐）
        * componentDidUpdate
    * 销毁阶段
        * componentWillUnmount
* 生命周期函数执行过程
    * 初始化
        1. constructor
        2. UNSAFE_componentWillMount
        3. render
        4. componentDidMount
    * 更新
        * props更新
            1. UNSAFE_componentWillReceiveProps
            2. shouldComponentUpdate
            3. UNSAFE_componentWillUpdate
            4. componentDidUpdate
        * state更新
            1. shouldComponentUpdate
            2. UNSAFE_componentWillUpdate
            3. componentDidUpdate
    > 思考：父子组件生命周期函数的执行顺序是怎么执行的？
### 知识点
* 组件什么时候会刷新
    1. state改变
    2. props改变
    3. 父组件刷新（当前组件依赖的props数据没有改变）
        > 这种情况必须优化
    4. 强制刷新：this.foreUpdate()
        > 不经过shouldComponentUpdate直接render
* 性能优化
    > 节点操作无法避免，但可以减少
    * shouldComponentUpdate
    * PureComponent
        > 与Component的区别：做了shouldComponentUpdate优化的Component

* react-router：一切皆组件
    * 路由类型
        * HashRouter
        * BrowserRouter
    * 路由渲染
        * Route
            > Route组件必须放在路由类型组件中
            * path
            * component
            * render
            * exact
        * Redirect
            * from
            * to
            * exact
        * Switch
    * 路由跳转
        * Link
    ```js
        // Vue-Router
        let router = new VueRouter({
            //..
            mode:'hash',// history
            routes:[
                {path:'/home',component:Home},
                {path:'/login',component:Login},
                {path:'/reg',component:Reg},
            ]

        })

        // 注入根实例
        new Vue({
            //...
            router
        })

        this.$router/this.$route
    ```

## day5-5

### 面试题
* 父子组件生命周期函数的执行顺序是怎么执行的
    * React
        1. 父组件constructor
        2. 父组件componentWillMount
        3. 父组件的render
        4. 子组件constructor
        5. 子组件componentWillMount
        6. 子组件render
        7. 子组件的componentDidMount
        8. 父组件的componentDidMount
    * Vue
        1. 父组件beforeCreate
        2. 父组件created
        3. 父组件beforeMount
        4. 子组件beforeCreate
        5. 子组件created
        6. 子组件beforeMount
        7. 子组件mounted
        8. 父组件mounted
* MVVM的原理
    * 分层
        * M：Model          数据层
        * V：View           视图层
        * VM: ViewModel     Vue/React框架
    * 原理
        * 监听
            * 对象
                * Object.defineProperty()   缺陷
                * Proxy
            * 数组
        * 渲染

    ```js
        <template>
            <div>
                {{a}}

                {{users}}
            </div>
        </template>
        vm = new Vue({
            data:{
                a:10,
                users:['laoxie','jingjing','xiaoxie']
            },
            created(){
                this.a = 20
            }
        })

        vm.a = 20;//
        vm.b = 100
        // vm.user.push('linejie');
        vm.user[3] = 'linejie'

    ```

    ### 复习
    * react-router常用组件
        * 路由类型
            * HashRouter
            * BrowserRouter
        * 路由渲染
            * Route
                * path
                * component
                * exact
            * Redirect
                * from
                * to
                * exact
            * Switch
        * 路由跳转
            * Link
                * to
                * replace
            * NavLink
                * to
                * activeStyle
                * activeClassName
* 路由跳转
    * 声明式导航
        > 利用组件实现跳转
        * Link
        * NavLink
    * 编程式导航
        > 利用js实现跳转
        * 跳转方法
            * history.push()
            * history.replace()
        * 重点：如何获取history、location、match对象
            * 组件通过Route的component属性渲染，以上三个对象自动传入props
            * withRouter高阶组件（包装函数）

* 高阶组件HOC（High Order Component）
    > 不是一个组件，而是一个用来包装组件的函数(高阶函数/纯函数)，并且必须返回一个新的函数
    * 纯函数
        1. 不修改传入的参数
        2. 固定输入有固定输出
    ```js
        function sum(a,b){
            return a+b;
        }
        sum(1,2);//3
        sum(1,2);//3

        function randomNumber(min,max){
            return parseInt(Math.random()*(max-min+1))+min
        }
        randomNumber(10,20);//10
        randomNumber(10,20);//14
    ```
    * 定义高阶组件