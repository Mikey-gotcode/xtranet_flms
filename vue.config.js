const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(ico|png|jpe?g|gif|svg|webp)(\?.*)?$/) // Add .ico here
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 8192, // Inlines images smaller than 8KB as base64
        name: 'assets/img/[name].[hash:8].[ext]',
      })
  },
})
