// const path = require('path')
// module.exports = {
//   publicPath: '/cms-manage/',
//   outputDir: 'dist',
//   devServer: {
//     host: '127.0.0.1',
//     port: '3001',
//     open: true,
//     proxy: {
//       '/api/atlas-cms': {
//         target: 'http://127.0.1:3300',
//         ws: true,
//         pathRewrite: { '^/api/atlas-cms': '/atlas-cms' }
//       }
//     }
//   }
//   //   chainWebpack: (config) => {
//   //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//   //     types.forEach((type) => {

//   //     })
//   //   }

// }
// function addStyleRecource(rule){
//     rule.use('style-recource-loader').options({
//         patterners:[path.__dirname,'./src/style.mixin.less']
//     })
// }
