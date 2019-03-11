const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('../config')
const merge = require('webpack-merge')
const cssLoader = require('./css-loader.conf')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: cssLoader.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  devtool: config.dev.devtool, // Source Maps
  devServer: {
    clientLogLevel: 'warning', // 在开发者工具响应信息 noen|waring|error|info默认
    historyApiFallback: { // 404响应页面 默认index.html
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 模块热替换
    contentBase: config.build.assetsRoot, // 是否启动指定获取相关静态目录信息 默认工作目录
    compress: true, // 启动gzip压缩
    host: HOST || config.dev.host, // IP
    port: PORT || config.dev.port, // 端口
    open: true, // 打开浏览器 --open 'Google Chrome' 打开google
    overlay: { // 是否全面显示警告和错误
      warnings: false,
      errors: true
    },
    publicPath: config.dev.assetsPublicPath, // 启动后的路径前缀
    proxy: config.dev.proxyTable, // 代理
    quiet: true, // 去除启动后的webpack警告和错误信息
    watchOptions: {
      aggregateTimeout: 500, // 设置延时重构更新
      ignored: /node_modules/, // 忽略大型文件更改产生的影响 
      poll: false, // 指定时间轮训看是否有文件改动 用于处理webpack-dev-server热更新不正常 boolean|Number
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 模块热替换devserver结合使用
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

// 用于处理端口重复问题
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`当前项目地址IP和端口号：http://${ip.address()}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
