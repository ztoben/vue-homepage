module.exports = {
  devServer: {
    port: 9999,
    open: true
  },
  baseUrl: process.env.NODE_ENV === 'DEV' ? '/' : '/vue-homepage/',
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {limit: 10240}))
  }
};
