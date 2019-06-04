const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
			rules: [
				{
					test: /(\.js|\.jsx)$/,
					use: {
                        loader: 'babel-loader',
                        // options: {
                        //     presets: [
                        //         "env", "react"
                        //     ]
                        // }
                    },
					exclude: /node_modules/,
				}, 
    ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    devServer:{
        open:true,
        // progress:true,
        // compress:true,
        proxy:{
          //可以配置跨域
        }
    }
}