import express from 'express'
import appRouter from './app'
import proRouter from './pro'
const router = express.Router()

router.use(express.json())
router.use('/app', appRouter)
router.use('/pro', proRouter)

export default router
