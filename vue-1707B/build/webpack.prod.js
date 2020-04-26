let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let TerserPlugin = require('terser-webpack-plugin');
let {smart} = require('webpack-merge');
//既想要base中的配置 又想要自己的配置
let base = require('./webpack.base');

let webpack = require('webpack');
let path = require('path');

let {CleanWebpackPlugin} = require('clean-webpack-plugin');//见到插件放到plugins new XXXPlugin

module.exports = smart(base, {
  mode: 'production',
  optimization: {//webpack4.0之后出现的优化项
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]//压缩css
    //缺陷 可以压缩css 但是 js压缩又出现了问题
,
    //webpack4.0之后提供的
    splitChunks:{//分割代码块
      cacheGroups:{//缓存组
        //自己的代码
        common:{//公共的逻辑
          chunks: 'initial',//从入口文件开始查找  async   all
          minSize: 0,//最小分包体积
          minChunks: 2,//最小引用次数
        },
        //第三方代码
        vendor:{//第三方
          priority: 1,//优先级
          test:/node_modules/,//目录
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll', 'manifest.json')
    })
  ]
});