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
                * 只适用于函数组件的方式: useContext
                

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
* computed与watch的区别
    ```js
        <template>
            <div>{{b}}</div>
        </template>
        new Vue({
            data:{
                a:10,
                c:20
            },
            watch:{
                a:function(newValue,oldValue){
                    
                }
            },
            computed:{
                // computed有缓存的特性
                b:function(){
                    // 耗费资源的复杂操作
                    return this.a;
                }
            }
        })
        //this.a = 100;
        this.c = 200
    ```
* 移动端适配方案
    * 缩放布局
        * rem布局
        * vw/vh/vmin/vmax
        > 使用大屏幕是为了看更多的内容而不是更大内容
    * 响应式布局
    * 自适应布局
    * 弹性盒
    * 百分比
    * ....
    > 一个完美的移动端适配方案不是单一的解决方案，而是所有解决方案的综合体

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
        * 定义方式一： 属性代理
        ```js
            // 封装获取本地数据的高阶组件
            function Login(){
                const user = {username:'laoxie',password:123456,role:'admin'}
                localStorage.setItem('currentUser',JSON.stringify(user))
                return <div>登录</div>
            }

            function Mine(props){
                //let data = localStorage.getItem('currentUser');
                //let currentUser
                //try{
                //    currentUser = JSON.parse(data);
                //}catch(err){
                //    currentUser = data;
                //}
                return <div>我的{props.currentUser.username}</div>
            }
            Mine = withUser(Mine)

            function Home(props){
                // props.currentUser => {username:'laoxie',password:123456,role:'admin'}
                return <div>{props.currentUser.username}</div>
            }
            Home = withUser(Home)


            // 高阶组件
            function withUser(InnerComponent){
                return function OuterComponent(){
                    // 为所欲为
                    let data = localStorage.getItem('currentUser');
                    let currentUser
                    try{
                        currentUser = JSON.parse(data);
                    }catch(err){
                        currentUser = data;
                    }
                    return <InnerComponent currentUser={curerntUser}/>
                    // return <Home currentUser={currentUser} />
                }
            }

        ```

## day6-1

### 知识点
* 查看文档的能力
    * 技术文档
        * 接口文档
        * 官方文档
    * 需求文档
* 发起ajax请求
    * XMLHttpRequest（原生js）
    * fetch（原生js）
    * jquery
    * axios
* fetch的封装

* 路由传参
    * search

## day6-2

### 面试题
* 如何实现一个类似于微信在同类型设备登录后自动下线之前登录的效果
    * 一个服务器，两个客户端
    * 一个客户端登录，另一个客户端自动下线
        * websocket
        * 轮询
### 知识点
* 路由传参
    * search
    * 动态路由
    * state
* webpack路径别名
    > resolve.alias



## day6-3

### 知识点
* redux使用步骤
    1. 安装redux
    ```bash
        yarn add redux --save-dev
        #or
        npm install redux -D
    ```
    2. 引用redux，并创建store仓库
    ```js
        import {createStore} from 'redux'

        // 创建仓库
        const store = createStore(reducer)
    ```
    3. 创建reducer，并初始化state
    ```js
        const initState = {}
        const reducer = function(state=initState,action){}
    ```
    4. 导出store
    5. 操作state
        * 获取state
        * 修改state

* redux核心
    * store     仓库（存放数据的容器）
        > 通过`createStore()`创建，store中包含以下常用方法
        * getState()    获取state最新状态 
        * dispatch(action)    修改state的唯一方式
        * subscribe()   监听state修改
    * state     状态（数据）
        > 需要定义初始值，初始值可以在createStore的第二个参数定义，也可以在reducer中定义（推荐）
    * reducer   修改state的方法
        > 是用来指定修改state的方法
        * 是一个纯函数（不能修改传入的参数）
        * 必须返回一个新的state
    * action    命令（动作）
        > 是一个对象，格式为：{type:'add_to_cart'}

* react-redux桥接工具
    > 一个把redux和react组件联系起来的工具
    * Provider组件
        > 封装Provider组件，利用context技术共享redux数据
    * connect高阶组件
        > 利用高阶组件把redux数据通过props传入组件
    * 使用react-redux的步骤
        1. 利用Provider组件传递store
        ```js
            import store from '@/store'
            <Provider store={store}>
                // 子组件
            </Provier>
        ```
        2. 在组件中利用`connect(mapStateToProps,mapDispatchToProps)`高阶组件定义传入当前组件的props数据
            * mapStateToProps
            * mapDispatchToProps
                > 默认传dispatch

            > 建议：在mapStateToProps函数中定共享的state数据，在mapDispatchToProps中定义修改state的方法
    

## day6-4

### 面试题
* Vue路由模式改为history需要做哪些操作
    1. 实例化路由时配置mode属性：`mode:'history'`
    2. 服务器配置
        > 除静态资源外的任何访问地址都响应index.html的内容
* 如何Vue页面数据闪现问题
    ```js
        <h1>{{title}}</h1>
        <style>
            [v-cloak]{opacity:0}
            // 骨架屏
        </style>
    ```
### 复习
* redux
    * 使用步骤
        1. 安装引用
        2. 创建仓库：store
        ```js
            import {createStore} from 'redux'
            const store = createStore(reducer)
            export default store;
        ```
        3. 使用
            * 获取
            * 修改
            * 监听
    * 核心
        * store     仓库
            * 常用方法
                * getState()        获取最新状态
                * dispatch(action)  唯一修改state的方法
                * subscribe(fn)
        * reducer   修改数据的方法
            > 是一个纯函数
            * 不修改传入的参数state,action
            * 返回一个新的state
        * state
            > 需要设置初始state（一般在reudcer中设置）
        * action    命令
            > dispatch(action)
    * redux工作流程

* react-redux
    * Provider组件利用Context技术共享数据
    * connect高阶组件接收数据
        * mapStateToProps       用于定义传入的state数据
        * mapDispatchToProps    用于定义修改state的方法

### 知识点
* 简化版redux
* redux模块
    > reducer模块化，模块化后只影响state的读取方式：`state.xxx -> state.[module].xx`
    ```js
    // vue
    const store = new Vuex.Store({
        state:{
            a:10
        },
        getters:{},
        mutations:{},
        actions:{},

        // 模块化Vuex
        modules:{
            // user.js
            user:{
                state:{
                    b:20
                },
                getters:{},
                mutations:{},
                actions:{}
            },

            // cart.js
            cart:{
                state:{},
                getters:{},
                mutations:{},
                actions:{}
            }
        }
    }) 
    // this.$store.state.a;
    // this.$store.state.user.b
    ```
* action creator    action构造器（一个用户创建action的函数）
    * bindActionCreators
    ```js
        //bindActionCreators(userAction,dispatch) {login,logout}
        function bindActionCreators(actionCreator,dispatch){
            // actionCreator={login,logout}
            const result = {}

            for(let key in actionCreator){
                result[key] = function(){
                    // dispatch(actionCreator[key](...arguments)); //(a,b,c)
                    dispatch(actionCreator[key].apply(null,arguments))
                }
            }

            return result
        }
    ```

* Redux设计和使用的三项基本原则
    * 唯一数据源：store是必须是唯一的
        > 一个应用只能有一个store
    * 只有store能改变自己的内容
        > 只能store提供的方法(dispatch)才能修改state
    * Reducer必须是一个纯函数
        > 在reducer中不修改传入的参数，并返回一个新的state
* 调试工具
    * react调式工具：React Developer Tools
    * redux调试工具：Redux DevTools


## day6-5

### 面试题
* JSX的原理
```js
    const button = <button>按钮</button>
    // const button = React.createElement('button',null,'按钮')
    <div>
        
    </div>

    $('input').attr('type');//获取值
    $('input').attr('type','password');//设置值
    const a = {name:"a",list:{a1:1,a2:2}}
    $.extend(a,{id:1,value:'abc'})
    const newObj = $.extend(true,{},a)
    newObj.list.a1 = 10;
```
* Vue组件如何控制传入数据的类型
```js
    // goodslist:[]
    <datalist :datalist="goodslist"></datalist>
    <datalist></datalist>

    Vue.component('datalist',{
        props:{
            // datalist:Array
            datalist:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {}
        },
        template:`<div><ul><li v-for="item in datalist"></li></ul><slot/></div>`
    })
```

### 复习
* 简易版redux
* redux模块化
* actionCreator 
    > action构造器：一个用于创建action的函数
    * bindActionCreators

### 知识点
* React组件中控制传入的数据类型
    1. 安装并引入`prop-types`模块
    2. 给组件设置`propTypes`静态属性
* React组件中控制传入的数据的默认值
    * 设置静态属性：defaultProps
```js
    // 16-: import {PropTypes} from 'react'
    // v16版本后类型校验剥离到一个单独的prop-types模块中
    import PropTypes from "prop-types";
    function Datalist(props){
        return <div>{props.children}</div>
    }

    // props数据类型校验
    Datalist.propTypes = {
        // 类型为数组，且必填属性
        datalist:PropTypes.array.isRequired,
        index:PropTypes.oneOfType([PropTypes.number,PropType.string])
    }
    // props默认值
    Datalist.defaultProps = {
        datalist:[],
        index:0
    }

    class Datalist extends React.Component{
        // 注意: ES6仅支持静态方法，不支持静态属性
        // Datalist.propTypes
        static propTypes = {
            datalist:PropTypes.array.isRequired,
            index:PropTypes.oneOfType([PropTypes.number,PropType.string])
        }
        static defaultProps = {
            datalist:[],
            index:0
        }

        // Datalist.getData(); jQuery.ajax(),jQuery.extend()
        static getData(){

        }
        render(){
            return <div>{this.props.children}</div>
        }
    }


    <Datalist datalist={[]} index={10}>
    </Datalist>

```

* redux中间件
    > 中间件为一个函数
    * 副作用effect（一些不可控的操作）

    * redux-saga
        * Generator 生成器函数
        * Iterator  迭代器
        * 使用步骤
            1. 安装并引入
            2. 创建saga中间件
    * 单元测时
        > 编写测试用例来验证自己写的代码有没有问题


## day7-1

### 知识点
* create-react-app  脚手架
    * 自定义webpack配置
        * 在react-scripts工具中修改（容易在更新时被覆盖，不推荐）
        * npm run eject （不可逆操作，不推荐）
        * react-app-rewired
            > 创建一个`config-overrides.js`文件来对 webpack 配置进行扩展，需要修改npm script
            * 1.x版本
            * 2.x版本
                * customize-cra
* Hook
    > 只能在函数组件中使用，且只能写在函数最外层
    * useState
        > 返回一个数组：`[状态,修改状态的方法]`，执行修改方法会触发函数组件的刷新
    * useEffect
        > effect 中的代码将在每轮渲染结束后执行
    * useMemo
        > 一般用于性能优化，依赖的数据没有修改时返回缓存数据（上一次运算的数据）
    * useCallback
        > 返回传入的函数


## day7-2

### 面试题
* 验证码的实现过程
    * 后端生成验证码，存入session,并返回给前端（图片）
    * 后端验证
        * 把前端输入的验证码发送到后端并与存在session中的验证码进行校验、
    * 难点：
        * 如何识别两个请求为同一个用户(http请求为无状态请求)：利用session
            * 第一次请求：获取验证码
            * 第二次请求：发送验证码
* git与github
    * git是一个软件，是一个版本管理工具
    * github是一个代码托管网站
        * master    ->     main

### 复习
* Hook
    > 只能在函数组件或其他hook中使用，且只能写在函数最外层
    * useState
    * useEffect
        > useEffect在渲染完成后执行
        * 无依赖：初始化和更新时都执行
        * 空依赖：初始化时执行
        * 有依赖：初始化和依赖修改时执行
        * 返回函数：返回的函数在组件被销毁时执行
    * useMemo
        > 用于执行一些比较耗费性能的操作
        * 无依赖：初始化和更新时都执行（不推荐）
        * 空依赖：初始化时执行
        * 有依赖：初始化和依赖修改时执行
    * useCallback
        > 返回传入的函数，一般用于事件处理函数和父子通讯时传入的函数
        * 无依赖：初始化和更新时都执行（不推荐）
        * 空依赖：初始化时执行
        * 有依赖：初始化和依赖修改时执行
    * useContext
        > 简化接收context共享的数据
    * useReducer
        > 简单版redux

### 知识点
* 利用useReducer+useContext实现简单版redux
    > 练习要求，在不看代码的情况下自己写出来
    * 唯一数据源：只能使用一次useReducer

* 不常用Hook
    * useRef    
    ```js
        // this.el 得到节点（适用于类组件）
        <button ref={el=>this.el=el}></button>
        
        // myRef.current 得到节点（函数组件+类组件）
        const myRef = React.createRef()
        <button ref={myRef}></button>

        // useRef（适用于函数组件）
        const myRef = useRef(null)
        <button ref={myRef}></button>
    ```
    * useLayoutEffect
        > useEffect的同步版本

        ```js
            function UseEffectSync(){
                useLayoutEffect(function(){
                    // 这里的代码在渲染前执行
                })
                useEffect(function(){
                    // 这里的代码在组件渲染后执行
                })
                return <div></div>
            }

        ```
* 第三方Hook
    * react-router
        ```js
            import {useHistory} form 'react-router-dom'
            function Home(props){
                // props.history
                const history = useHistory();

                //props.match.params
                const params = useParams()
            }
            Home = withRouter(Home)
        ```
    * react-redux
        ```js
            // state = {user:{},cart:{},common:{}}
            import {useStore,useDispatch,useSelector} from 'react-redux'
            function Cart(){
                const store = useStore()
                const dispatch = useDispatch()
                const user = useSelector('user')
                return <div></div>
            }

            // connect(mapStateToProps,mapDispatchToProps)(Cart)

        ```
    * antd
        * useForm

* 自定义Hook
    > 自定义 Hook 是一个**函数**，其名称以 `use` 开头，利用`useState/useReducer`实现组件刷新

    ```js
        // 获取/设置WebStorage中的数据
        function useStorage(key){
            let data = localStorage.getItem(key);// null,string,json
            try{
                data = JSON.parse(data) || {};
            }catch(err){
                data = {}
            }
            function setStorage(newData){
                if(typeof newData === 'object'){
                    newData = JSON.stringify(newData)
                }
                localStorage.setItem(newData)
            }
            return [data,setStorage];
        }

        function Login(){
            const [currentUser,setStorage] = useStorage('currentUser')
        }

    ```


## day8-1

### 面试题
* ES6（ECMAScript2015）新特性
    * ES3
    * ES5   2009
    * ES6   2015
        * let,const
        * 字符串模板
        * 解构
        * 箭头函数
        * ...
        * 对象简写
        * **Promise**
        * **class**
        * **ESModule**
        * **Proxy**
        * Set/Map
        * Generator
        * Iterator
        * Symbol
        ```js
            const age = 20;
            const obj = {
                username:'jj',
                password:1234,
                age,
                say(){

                }
            }
        ```
    * ES7   2016
        * 装饰器
    * ES8
        * async&await
    * ES9
    * ES10
* 伪元素与伪类
    * 伪元素： `::`
        * before
        * after
        * first-letter
        * first-line
        * root
    * 伪类： `:`

### 知识点

* 微信小程序文件结构
    * 文件类型（按文件类型）
        * .json 配置文件                    
        * .js 逻辑文件                      js
        * .wxss 样式文件                    css
        * .wxml 布局文件                    html
        * .wxs 模块化脚本文件
    * 按作用域
        * 全局文件
        * 页面文件
* tabBar页面与非tabBar页面
    * tabBar页面：设置在app.json中tabbar选项中的页面
* 页面跳转
    * 组件：navigator
    * 接口：
        * wx.navigate()
* wxml语法
    * 数据绑定
        * 单向: {{}}
        * 双向: model:value=""
    * 事件绑定
        > bind:xxx
    * 列表循环
        * wx:for
        * wx:key
        * wx:for-item="it"
        * wx:for-index="idx"

## day8-2

### 复习
* 应用：app.js
    > App(options)
* 页面: [page].js
    > Page(options)
    * options
        * data
            * 获取：
                * wxml: 直接写在双花括号`{{xxx}}`中
                * js：this.data.xxx
            * 修改：this.setData(newData,callback)
            ```js
                data:{
                    goodslist:[{name:'goods1',price:123},{name:'goods2',price:213}]
                }

                // react
                this.setState({
                    goodslist:[]
                })

                this.setData({
                    'goodslist[1].price':312
                })
            ```
* wxml语法
    * 数据绑定
    * 事件绑定
        * 格式
            * bind:事件类型="事件处理函数"
            * catch:事件类型 ="事件处理函数"           阻止事件向上冒泡
            * capture-bind:事件类型="事件处理函数"     在捕获阶段执行事件处理函数
            * capture-catch:事件类型="事件处理函数"     在捕获阶段执行事件处理函数并阻止事件向下传播
        * 事件类型
            * touch
                * touchstart
                * touchend
                * touchmove
                * touchcancel
            * 手势
                * tap: 点击
                    > 对touch事件的封装
                * longtap：长按（不推荐）
                * longpress：长按
    * 列表循环
        * wx:for
            > item和key获取的是当前循环的值
            * item
            * index
        * wx:key
            * 在小程序中key的值为**属性名**，而不是属性值
            * `*this` 代表item本身
        * wx:for-item
        * wx:for-index
        ```JS
            // goodslist=[{id:1,name:'goods1',price:[120,140,180]},{}]
            <view wx:for="{{goodslist}}" wx:key="id">
                {{item.name}}
                <view wx:for="{{item.price}}" wx:for-item="price" wx:key="*this">
                    {{item.name}}: {{price}}
                </view>
            </view>
        ```
### 知识点
* 条件渲染
    * wx:if             v-if
    * wx:else
    * wx:elif
    * hidden            v-show
* 事件绑定
    * event
        * detail:
    * 传参
        * 自定义属性：data-*
            > 通过`dataset`获取所有自定义属性的集合
    ```js
        // vue
        <button @click="handle(xx)"></button>

        // react
        <button onClick={handle.bind(null,xxx)}></button>
    ```
* ajax二次封装
    > wx.request进行封装
* 路由传参与接收
    * 传参：利用url参数的方式进行传参
    * 接收：目标页面在`onLoad`的`options`参数获取传入的值
* 在小程序中使用npm模块
    > 微信小程序中不能直接使用npm模块，必须经过重新编译才能使用，编译方式如下
    1. 创建package.json
    2. 安装npm模块
    3. 编译：菜单 -> 工具 -> 构建npm
        > 构建后项目会生成一个`miniprogram_npm`的目录

## day8-3

### 面试题
* Vue如何监听数据的改变
    * 属性必须响应式属性，如何把属性变成响应式属性
        * 初始化时定义
        * Vue.set(target,proName,value)/this.$set()
            * target能是实例和data
            ```js
                const vm = new Vue({
                    data:{
                        a:100,
                        score:{
                            en:100,
                            math:80,
                            //chinese:120
                        }
                    }
                })

                vm.a = 200;
                vm.b = 10;// 不是响应式属性
                //Vue.set(vm.$data,'c',20);//
                vm.set(vm.score,'chinese',120)

                vm.$watch('a',function(newVal,oldVal){

                })
            ```
    * 监听路由变化
        ```js
            {
                data:{
                    a:100
                },
                watch:{
                    // 能监听实例下的所有属性
                    a:function(newVal,oldVal){
                        
                    },
                    '$route.path':function(newVal,oldVal){
                        // /home->/mine
                    }
                },
                beforeRouteUpdate(to,from,next){
                    // to: {path:'/mine',...}
                    // from: {path:'/home',..}
                    next()
                }
            }

            <button @keyup.enter="">
        ```

### 知识点
* 组件
    * 内置组件
        * audio
        * video
        * camera
        * image
* 授权
    * 第一次：
        * 授权列表没有相关信息，判断方式为:
        ```js
            if(authSetting['scope.camera'] === undefined){

            }
        ```
    * 用户拒绝过使用权限，判断方式为
        ```js
            if(authSetting['scope.camera'] === false){
                
            }
        ```
    * 用户信息权限`userInfo`
        > 用户信息必须是通过**用户主动点**击才能获取，不能通过`wx.authorize`获取
* 地图：map
    * 经纬度：longitude + latitude
    * 坐标系
        * wgs84
        * gcj02 国测局
        * bd09  百度坐标系（基于gcj02加密后的坐标系）
* 自定义组件
    * 定义
        > 通过Component(options)注册一个组件
        * 常用配置参数
            * data          组件数据
            * properties    父组件传入数据
            * methods       方法
            * observers     监听数据修改（类似于Vue中的watch）
            * 组件生命周期函数：lifetimes
            * 页面生命周期函数：pageLifetimes
    * 使用
        > 在`usingComponents`中定义组件名称和组件路径
        * 全局组件: 在app.json中配置
        * 局部组件：在页面配置文件中配置
* 自定义tabBar
    > 自定义一个组件来实现tabbar的效果，只有tabBar页面才显示tabBar
    1. 定义`app.json`的`tabBar.custom`属性为`true`
    2. 在根目录下创建`custom-tab-bar`组件，且文件名为index

## day8-4

### 面试题
* 如何保证前后端数据传输的安全性
    * 加密与解密
        * 单向加密
            * 算法：md5,sha1,sha256,sha512....
            * 缺点
                * 加密后的信息是固定：可以被暴力破解
            * 解决方案
                * 次数限制
                * 多次加密
        * 双向加密：一般用于前后端数据通讯
            * 对称加密
                > 加密与解密公用一把钥匙
                * 算法：AES/DES
                * 优点：速度快
                * 缺点：不安全
            * 非对称加密
                > 有两把钥匙，分别为公钥和私钥
                    * 公钥加密，私钥解密
                    * 私钥加密，公钥解密
                * 算法：RSA
                * 优点：安全
                * 缺点：速度慢
            * 应用
                * https协议
                * git ssh协议
* jsonp原理
    > jsonp请求需要服务器支持
    * 发送**全局函数名**给后端
    * script标签请求接口返回js代码
        > js代码格式：全局函数的执行代码
    ```js
        // 前端代码
        function getData(data){
            console.log(data);
        }

        <script src="/js/home.js"></script>
        <script src="/api/list?callback=getData">
            // 相当于在这里执行了
            // getData([{},{}])
        </script>

        $.ajax({
            type:'jsonp'
        });
        // ?callback=jQuery123987421903874120938472103


        // 后端代码
        // /api/list接口
        router.get('/api/list',(req,res)=>{
            const {callback} = req.query;
            // 查询数据库，得到数据
            const data = [{},{}];

            res.send(`${callback}(${data})`);//res.send(`getData([{},{}])`)
        })
    ```
* react组件优化
    * shouldComponentUpdate
    * PureComponent
    * 优先使用函数组件


### 知识点
* 模块化
    * js模块化
        * ESModule
        * commonJS
            >无法直接使用npm模块，必须经过编译（`工具->构建npm`）才可使用
    * wxs模块
        * src
        * module
    * wxml模板
        > 结构复用
* 微信小程序原生开发

* 云开发
    * 解决了什么问题？
        * 解决了服务器的问题
    * 包含什么东西？
        * 数据库
        * 存储空间
        * 云函数
            * 定义
                ```js
                    // 云函数入口函数
                    exports.main = (event, context) => {
                        // 云函数接收参数
                        const {type} = event;
                        return data;
                    }
                ```
            * 调用
                * 小程序端调用
                    > wx.cloud.callFunctioin({name})
                * 云函数中调用其他云函数
                    > cloud.callFunction({name})
                ```js
                    wx.cloud.callFunctioin({
                        name,
                        // 给云函数传递参数
                        data:{
                            type:'insert',// update,add,remove
                        }
                    })

                ```
    * 如何操作？
        * 在小程序端操作
            > 通过`wx.cloud`接口进行操作，会有权限问题
            1. 初始化
                ```js
                    wx.cloud.init({
                        evn:'环境id'
                    })
                ```
            2. 操作
                * 数据库
                    * 概念
                        * database      数据库      database
                        * collection    集合        table
                        * document      文档        row
                    * CRUD
                        * 批量操作：通过`collection`进行操作
                        * 单条操作：通过`doc`获取到`document`后进行操作
                        * 操作符：db.command.xxx

                * 存储文件
                * 云函数
        * 在云函数中操作
            > 存放在云端的函数，相当于后端，操作没有权限问题，通过SDK工具包（`wx-server-sdk`）
            1. 初始化
                ```js
                    const cloud = require('wx-server-sdk');

                    cloud.init({
                        env:
                    })
                ```
            2. 操作
                * 数据库
                * 存储文件
                * 云函数

        * 在自己的服务器中操作
            > 在自己的服务器中通过`Http API`操作云函数，数据库，存储文件
            ```js
                // nodeJS代码
                // config.js
                module.exports = {
                    appid:'wx8cf6111b4ab000f2',
                    secret:'xxx'
                }
                // server.js
                const axios = require('axios');
                const config = require('./config')

                const {data:{access_token}} = await axios.get('https://api.weixin.qq.com/cgi-bin/token',{
                    params:{
                        grant_type:'client_credential',
                        appid:config.appid,
                        secret:config.secret
                    }
                })

                // 根据access_token调用http api
                axios.post('https://api.weixin.qq.com/tcb/databasequery?access_token='+access_token,{
                    env:'qf-52690b',
                    query:'db.collection("class").where({city:"广州"}).get()'
                })

            ```
## day8-5

### 面试题
* 深拷贝与浅拷贝
```js
    let a = 100;
    let b = a;

    let obj1 = {a:1,b:2,c:{c1:31,c2:32}} ; //obj1='#abc'
    let obj2 = obj1;  // obj2='#abc'

    // 浅拷贝
    let obj3 = Object.assigin({},obj1);
    obj3.c1=310;
    let obj4 = {...obj1}
    let obj5 = {}
    for(let key in obj1){
        obj5[key] = obj1[key]
    }

    // 深拷贝
    // * 递归遍历
    // * JSON.parse(JSON.stringify())
    // * 第三方工具
    //      * jQuery.extend()
    //      * underscore
    //      * lodash.cloneDeep
    let obj6 = jQuery.extend(true,{},obj1)

```
* 原型链的理解
    > 实例到Object.prototype间的链条
    * js是一门基于对象的语言：一切皆对象
    * 属性访问规则：在原型链中逐层往上查找（找不到返回undefined）
        > 变量访问规则：在作用域链中逐层往上查找（找不到报错：xxx is not defined）
    ```js
        let num = 10;
        num.toFixed(2);//10.00

        // 以上代码执行时会经历以下步骤
        // 1. 临时创建一个对象: num = new Number(num)
        // 2. 通过临时对象调用toFixed方法并得到结果：num.toFixed()
        // 3. 删除临时对象

        const a = 10;
        const b = 20
        function show(a){
            // var b
            // var d
            console.log(a+b);

            let b = 5;
            var d = 10;
        }

        show(20);//40,25,NaN

        // 全局作用域
        var username = 'laoxie';
        let age = 18;
    ```
* 0.1+0.2
    > 十进制小数转二进制会产生误差
    * 十进制转二进制
    * 二进制转十进制
    * 解决方案：
        * 把小数部分转成整数在计算，最后除以相应的倍数
    ```js
        110 => 0*2^0+1*2^1+1*2^2 ;// 6

        // 整数十转二：除2求余法
        4 => 100
        // 小数十转二：乘2取整法
        0.1 => 0.000110011001
        // 0.1*2=0.2    =>0
        // 0.2*2=0.4    =>0
        // 0.4*2=0.8    =>0
        // 0.8*2=1.6    =>1
        // 0.6*2=1.2    =>1
        // 0.2*2=0.4    =>0
        // 0.4*2=0.8    =>0
        // 0.8*2=1.6    =>1

        0.625=>
        0.625*2 = 1.25  =>1
        0.25*2 = 0.5    =>0
        0.5*2  = 1      =>1

        5.017 + 1.2
    ```
* ESModule与CommonJS
    ```js
        // esmodule 静态引入
        const url = '../node_modules/axios/index.js'
        import axios from url; // 报错

        import axios from '../node_modules/axios/index.js';
        axios.post();

        // commonJS
        const url = 'axios';
        const axios = require(url);
        axios.get();

    ```

## 知识点
* 跨平台框架
    * uni-app
    * mpvue
    * wepy  微信官方退出了微信小程序开发框架
    * taro  
        * 支持框架
            * React
            * Vue
            * Vue3
            * Nerv
        * 路由
            > 与微信小程序一致: Taro.navigateTo()
        * taro-ui
            > 注意版本问题，版本必须跟taro同步
* mobx
    > 类似于Vuex、Redux的状态管理工具，一般都会安装`mobx-react`配合使用

    * mobx-react
        * 组件
            * Provider
        * 高阶组件
            * observer
            * inject
* redux
    * react-redux
        * Provider
        * connect()


## day9-4
* typescript
    * 类型校验

```js
    var num = 100;

    // num = {}


    num.toFixed(2);//

    getData()
```

```ts
    var num:number = 100;
    // num = 'abc'; // 报错
```