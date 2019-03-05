const path = require('path')
const config = require('../config')
const packageConfig = require('../package.json')

// 返回项目根目录
exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

// 处理url-loader 文件路径问题
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// 启动消息提示
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')
  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png'),
      sound: true
    })
  }
}
