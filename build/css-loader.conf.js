// 返回一个css loader集合以key value形式
cssLoaders = function (options) {
  options = options || {}
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  const vueStyleLoader = {
    loader: 'vue-style-loader',
    options: {
        sourceMap: options.sourceMap
    }
  }
  // 单独处理需要返回的loader格式
  function generateLoaders (loader, loaderOptions) {
    const loaders = [vueStyleLoader, cssLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    return loaders
  }
  // 将css loader加工 以对象形式返回
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less')
  }
}
  
// 返回rules所需要的所有css loader
exports.styleLoaders = function (options) {
  const output = []
  const loaders = cssLoaders(options)
  Object.entries(loaders).forEach(loader => {
    output.push({
      test: new RegExp('\\.' + loader[0] + '$'),
      use: loader[1]
    })
  })
  return output
}
  