const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    // 配置别名
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': "@/components",
        'router': '@/router',
        'store': '@/store',
        'views': '@/views'
      }
    },
    //引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}