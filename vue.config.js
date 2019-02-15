// const configs = require('./config')

// // 用于做相应的合并处理
// const merge = require('webpack-merge')

// //根据环境判断使用哪份配置
// const cfg = process.env.NODE_ENV === 'production' ? configs.build.env:configs.dev.env

// 访问 env 的环境变量
// console.log(process.env)

const utils = require('./build/utils')

module.exports = {
  
  // 多页面需要配置每个页面的入口文件
  // entry:{
  //   page1:'/src/pages/page1/page1.js',
  //   page2:'/src/pages/page2/page2.js',
  //   index:'/src/pages/index/index.js'
  // },
  // configureWebpack:config => {
  //   config.entry = utils.getEnteries() // 直接覆盖 entries 配置

  //   // 使用 return 一个对象会通过 webpack-merge 进行合并
  //   return {
  //     plugins: [...utils.htmlPlugins()]
  //   }
  // },
  pages: utils.setPages(),
}
