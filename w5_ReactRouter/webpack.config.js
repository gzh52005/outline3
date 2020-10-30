/**
 * webpack配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    // 入口
    entry: './src/main.js',

    // 出口（编译后的输出目录）
    output: {
        path: path.resolve('./dist')
    },

    // 默认跨站名
    resolve:{
        extensions:['.js','.jsx']
    },

    // 加载器loader
    // 在webpack中，每一种文件的编译都需要特定的加载器
    module:{
        rules:[
            // 加载器的执行顺序：从后往前
            // 针对js/jsx的加载器（ES6+转成ES5，JSX->js）
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        // @babel/preset-react用于把JSX转成JS
                        presets:['@babel/preset-react'],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }]
            },

            // css加载器：css-loader,style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader（依赖node-sass）
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    // 测试服务器
    devServer:{
        contentBase:'./public',
        host:'0.0.0.0',
        port:2005
    },

    // plugin插件
    plugins:[
        new HtmlWebpackPlugin({
            // 指定模板生成index.html
            template:'./public/template.html'
        })
    ]
}
