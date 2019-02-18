const path = require('path')
const merge = require('webpack-merge')

// glob 是 webpack 安装时依赖的第三方模块，允许你使用 * 获取对应目录下的所有文件
// lib/*.js lib目录下的所有js文件
const glob = require('glob')

// 获得相应的页面路径
const PAGE_PATH = path.resolve(__dirname,'../src/pages')

// /*
// *多入口配置
// *通过 glob 模块读取 pages 文件夹下的所有对应文件夹下的 js * 后缀文件，存在则作为入后文件
// *
// */
// exports.getEnteries = () =>{
//     let entryFiles = glob.sync(PAGE_PATH + '/*/*.js') // 同步读取所有入口文件
//     let map = {}

//     // 遍历所有入口文件
//     entryFiles.forEach(filePath => {
//         console.log(filePath);
        
//         // 获取文件名
//         let filename = filePath.substring(filePath.lastIndexOf('\/') + 1,filePath.lastIndexOf('.'))

//         // 以键值对的形式储存
//         map[filename] = filePath
//     })

//     return map
// }


// // 多页面输出配置
// // 读取 page 文件夹下对应的 html 后缀文件，放入数组中
// exports.htmlPlugins = configs => {
//     let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
//     let arr = []

//     entryHtml.forEach(filePath => {
//         let filename = filePath.substring(filePath.lastIndexOf('\/')+1,filePath.lastIndexOf('.'))
//         let conf = {
//             template:filePath, // 模板路径
//             filename:filename + '.html', // 生成html 文件名
//             chunks: ['mainfest','vendor',filename],
//             inject:true
//         }

//         // 如果有自定义配置可以进行 merge
//         if(configs){
//             conf = merge(conf,configs)
//         }

//         // 针对生产环境配置
//         if(process.env.NODE_ENV === 'production'){
//             conf = merge(conf,{
//                 minify: {
//                     removeComments:true, // 删除 html 中的注释代码
//                     collapseWhitespace:true, // 删除 html 中的空白字符
//                     // removeAttribute: true // 删除 html 元素中属性的引导
//                 }
//             })
//         }

//         arr.push(new HtmlWebpackPlugin(conf))
//     })
//     return arr
// }

// 使用 setPages 进行多入口的配置，就是上述两个的合并
exports.setPages = configs => {
  let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  let map = {}

  entryFiles.forEach(filePath => {

    let filename = filePath.substring(filePath.lastIndexOf('\/')+1,filePath.lastIndexOf('.'))
    let tmp = filePath.substring(0,filePath.lastIndexOf('.'))

    let conf = {
      // page 入口
      entry: filePath,
      // 模板来源
      template:tmp + '.html', // 模板路径
      // 在 dist/index.html 的输出
      filename:filename + '.html', // 生成html 文件名
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['mainfest','vendor',filename],
      inject:true
    }

    // 如果有自定义配置可以进行 merge
    if(configs){
      conf = merge(conf,configs)
    }

    // 针对生产环境配置
    if(process.env.NODE_ENV === 'production'){
      conf = merge(conf,{
        minify: {
          removeComments:true, // 删除 html 中的注释代码
          collapseWhitespace:true, // 删除 html 中的空白字符
          // removeAttribute: true // 删除 html 元素中属性的引导
        },
        chunksSortMode:'manual' // 按 manual 的顺序引入
      })
    }

    map[filename] = conf
  })

  return map
}