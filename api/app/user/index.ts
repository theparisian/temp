import express from 'express'
import { handleLogin, handleLogout, handleRefreshToken, handleRegister } from './controller'

const router = express.Router()

router.post('/register', handleRegister)
router.post('/login', handleLogin)
router.get('/refresh_token', handleRefreshToken)
router.get('/logout', handleLogout)

export default router
