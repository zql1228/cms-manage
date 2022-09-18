const path = require('path')

module.exports = {
  publicPath: '/cms-manage/', // 部署应用包时的基本 URL
  outputDir: 'dist', // 打包文件
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: '3001',
    open: true,
    proxy: {
      '/api/atlas-cms': {
        target: 'http://127.0.1:3300',
        ws: true,
        pathRewrite: { '^/api/atlas-cms': '/atlas-cms' }
      }
    }
  },
  chainWebpack: (config) => {
    // 自动化导入css文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) => {
      addStyleRecource(config.module.rule('less').oneOf(type))
    })
    // 设置src别名
    config.resolve.alias.set('@', path.resolve(__dirname, './src'))
  }

}
function addStyleRecource (rule) {
  rule.use('style-resource').loader('style-resources-loader').options({
    patterns: [path.resolve(__dirname, './src/style/mixin.less')]
  })
}
