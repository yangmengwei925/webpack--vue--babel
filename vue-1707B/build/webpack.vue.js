let path = require('path');
let webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: {
    vue: ['vue', 'vue-router','vuex','element-ui']
  },
  output:{
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, '../dll'),
    library: '_dll_[name]',
    //  "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "amd-require" | "umd" | "umd2" | "jsonp" | "system"
    // libraryTarget: 'commonjs2'//默认 var
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, '../dll', 'manifest.json')
    })

  ]
};