const path = require('path');
const HtmlWebpackPlugin  = require("html-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "10- webpack 自动生成 index.html"//配置title属性
        }),
    ]
};