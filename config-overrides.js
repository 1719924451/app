// const { styles } = require('./src/styles/theme')
const { 
    addWebpackAlias, //创建别名
    addLessLoader, //配置less
    fixBabelImports, 
    override,
    addDecoratorsLegacy //支持e7装饰器
  } = require('customize-cra')
  const path = require('path')

  
module.exports = override(
    // @ 修饰器
    addDecoratorsLegacy(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      // 支持 less sass stylus
      style: true,
    }),
    // 支持 antd 主题定制
    addLessLoader({
      javascriptEnabled: true,
    //   modifyVars: styles,
    }),
    // 别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname, 'src/components'),
    })
  )
  