module.exports = {
  publicPath:'/',
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
  },
  // 默认打包入口
  chainWebpack: (config) => {
    // 生产环境
    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.set('externals', {
      })
    })

    // 开发环境
    config.when(process.env.NODE_ENV === 'development', (config) => {})
  },
}
