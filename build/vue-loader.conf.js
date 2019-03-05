const utils = require('./utils')

module.exports = {
    // 对vue-loader添加缓存
    cacheDirectory:  utils.resolve('./cache-loader'),
    cacheIdentifier: 'cache-loader:{version} {process.env.NODE_ENV}',
    // 强制必须组件含有name
    exposeFilename: true,
    // 转换vue内部引用转换为require 用于webpack处理
    transformAssetUrls: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
