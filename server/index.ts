import express, { Request, Response } from "express"
import next from "next"
import apiRouter from '../api'
import apiConfig from '../config/api'
import dbClient from '../db/dbClient'

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
dbClient.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const dev = apiConfig.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = apiConfig.PORT || 3000


  ; (async () => {
    try {
      await app.prepare()
      const server = express()
      server.use('/_api/', apiRouter)
      server.all("*", (req: Request, res: Response) => {
        return handle(req, res)
      })
      server.listen(port, (err?: any) => {
        if (err) throw err
        console.log(`> Ready on localhost:${port} - env ${apiConfig.NODE_ENV}`)
      })
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  })()
