回顾:
  webpack 高级用法:
    优化 体积 速度

  今天:
    1: vue结合webpack 搭建一个完整的项目
    2: 封装一些常用的组件
       侧边栏 二级路由
       树组件
       拖拽组件
    3: 项目:(考试平台)
       配合  独立开发  学会百度


    目录分配
    常见的封装
    后台 : 后台的框架
    vuex:
    axios:二次封装

  1: git 回到某个版本
     git reset --hard ^HEAD
  2: webpack 优化点
     前缀 autoprefixer 代码优雅
     压缩 插件
     new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})
       production
     自带优化
     动态链接库  第三方 单独打包 cdn 上
     抽离公共代码
  3: 如何处理history刷新404的问题
     解决问题
     historyapifallback:

  4: webpack 处理js文件都需要哪些插件
     babel-loader
     @babel/core @babel/preset-env
     plugins: es7语法

如何处理history刷新404的问题
  webpack devServer 中加 historyApiFallback: true

  配色网站 https://colorhunt.co/

资源问题 404问题
  

  //二级路由资源文件请求404
   output: {
      filename: 'bundle.[hash:10].js',//打包的文件叫什么名字
      path: path.join(__dirname, '../dist'),
      publicPath: "/"//访问资源文件的时候 从根路径访问
    },

图片的问题
什么也没配置
  img src   显示的效果 : src="[object Module]"

  解决办法:
    {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              esModule: false
            }

          }]
        },
图片的问题
什么也没配置
  img src   显示的效果 : src="[object Module]"

  解决办法:
    {
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              esModule: false
            }

          }]
        },
 http://118.89.234.135:4000/ 崔利宝博客

https://gitee.com/bingyu123/my_1707B            https://bingyu123.gitee.io/blog 