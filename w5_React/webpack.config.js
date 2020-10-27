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

    // 加载器loader
    // 在webpack中，每一种文件的编译都需要特定的加载器
    module:{
        rules:[
            // 针对js的加载器（ES6+转成ES5，JSX->js）
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        // @babel/preset-react用于把JSX转成JS
                        presets:['@babel/preset-react'],
                        // plugins:[]
                    }
                }]
            }
        ]
    },

    // 测试服务器
    devServer:{
        contentBase:'./public',
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
