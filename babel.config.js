const presets = [
  [ // 按需加载
    '@babel/preset-env',
    {
      "corejs": 2,
      "modules": false,
      "useBuiltIns": 'usage'
    }
  ]
]

const plugins = [
  '@babel/plugin-transform-object-assign',
  '@babel/plugin-proposal-export-namespace-from', // export * as ns from 'mod'
  [ // 为对象添加...运算符
    '@babel/plugin-proposal-object-rest-spread', {
      "loose": true,
      "useBuiltIns": true
    }
  ],
  [ // 修饰器语法
    '@babel/plugin-proposal-decorators', {
      "legacy": true
    }
  ],
  [ // this指向
    '@babel/plugin-proposal-class-properties', {
      'loose': true
    }
  ],
  '@babel/plugin-syntax-dynamic-import', // import语法
  '@babel/plugin-proposal-function-sent', // generator
  '@babel/plugin-proposal-json-strings', // 转义变量中U+2028
  '@babel/plugin-syntax-import-meta', // meta标签
  ['@babel/plugin-transform-modules-commonjs', {
    'allowTopLevelThis': true
  }],
  [ // 抽离bable helpers async重复添加引入函数
    '@babel/plugin-transform-runtime', {
      'corejs': 2,
      'regenerator': false,
      'useESModules': true
    }
  ],
]

module.exports = {
  presets,
  plugins
}