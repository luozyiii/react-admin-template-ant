const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/baseApis', {
      // 目标代理服务器地址
      target: 'http://域名/baseApis/',
      // 是否允许跨域
      changeOrigin: true,
      // 重写接口
      pathRewrite: {
        '^/baseApis': '/'
      }
    })
  )
}
