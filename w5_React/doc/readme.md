# React

## day5-1

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