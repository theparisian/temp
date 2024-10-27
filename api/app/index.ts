import express from 'express'
import userRouter from './user'
import cookieParser from 'cookie-parser'

const appRouter = express.Router()
appRouter.use(cookieParser())
appRouter.use('/', userRouter)

export default appRouter