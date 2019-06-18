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
                {
					test: /\.less$/,
					use: [{
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                          }
                    }],
                    include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')]
                }, 
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')]
                }
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