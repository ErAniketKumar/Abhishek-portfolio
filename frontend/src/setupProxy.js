const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // Match the path you want to proxy, e.g., "/api" or "/dashboard"
    createProxyMiddleware({
      target: 'https://abhisheksarraf.in',  // Replace with your backend's URL
      changeOrigin: true,
      secure: false,  // Disable SSL verification if necessary
      pathRewrite: {
        '^/api': ''  // Remove "/api" from the path before proxying
      }
    })
  );
};
