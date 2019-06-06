const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/{{assetsPublicPath}}/', // 设置启动后访问路径前缀
    proxyTable: {}, // 代理
    // devserver 所需配置
    host: '0.0.0.0', // 如果需要设置host localhost 0.0.0.0方便移动端手机调试
    port: 8080, // 端口
    notifyOnErrors: true, // 是否显示消息提示信息
    openPage: '{{assetsPublicPath}}', // 自动打开页面
    // Source Maps
    devtool: 'cheap-module-eval-source-map',
  },
  build: {
    // 编译的文件入口地址
    index: path.resolve(__dirname, '../dist/index.html'),
    // 打包输出path 
    assetsRoot: path.resolve(__dirname, '../dist'), // 打包后的地址
    assetsSubDirectory: 'static', // 静态目录拷贝出的存放地址
    assetsPublicPath: '/{{assetsPublicPath}}/', // 打包后的目录地址
    // 是否启用source map source类型
    productionSourceMap: true,
    devtool: '#source-map',
    // 文件压缩是否启用gizp和匹配文件
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // 是否启用蓝图 - 查看打包细节
    bundleAnalyzerReport: process.env.npm_config_report
  },
  // Config for vipkid online environment
  online: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/{{assetsPublicPath}}/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }

}