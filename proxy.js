const proxy = () => {
  const testServer = "http://45.63.15.204"
  return [
    {
      context: ["/api"],
      target: testServer,
      secure: false,
      changeOrigin: true,
      cookieDomainRewrite: {
        "*": "",
      },
    },
  ]
}
module.exports = proxy
