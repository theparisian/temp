// server.js
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
const apiPaths = {
  '/_api': {
      target: 'https://quiz-beta.z16.fr', 
      pathRewrite: {
          '^/_api': '/_api'
      },
      changeOrigin: true
  }
}
app.prepare().then(() => {
  const server = express()
  server.use('/_api', createProxyMiddleware(apiPaths['/_api']))
  server.all("*", (req, res) => {
    return handle(req, res)
  })
  server.listen(port, () => {
    console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
  })
})
