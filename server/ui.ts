import express, { Request, Response } from 'express'
import next from 'next'
import { createProxyMiddleware } from 'http-proxy-middleware'

const dev = process.env.NODE_ENV !== "production"
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

;(async () => {
  try {
    await app.prepare()
    const server = express()

    server.use('/_api', createProxyMiddleware(apiPaths['/_api']))

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res)
    })
    server.listen(port, (err?: any) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
