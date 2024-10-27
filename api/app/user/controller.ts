import { Request, Response } from 'express'
import { ApiError } from '../../core/apiError';
import { handleError } from '../../core/errorHandler';
import { login, refreshToken, register } from './service'
export const handleRegister = (req: Request, res: Response) => {
    (async () => {
        try {
            await register(req.body)
            res.send({ok: true})
            
        } catch (err: ApiError | any) {
            const [code, result] = handleError(err)
            res.status(code).send(result)
        }
    })()
}

export const handleLogin = (req: Request, res: Response) => {
    (async () => {
        try {
            const token = await login(req.body)
            res.cookie('refresh_token',token, { maxAge: 900000, httpOnly: true, sameSite: 'lax'}); // TODO Secure
            res.send({ok: true})
        } catch (err: ApiError | any) {
            const [code, result] = handleError(err)
            res.status(code).send(result)
        }
    })()
}

export const handleLogout = (req: Request, res: Response) => {
    (async () => {
        try {
            res.cookie('refresh_token', null, { maxAge: 0, httpOnly: true, sameSite: 'lax'}); // TODO Secure
            res.send({ok: true})
        } catch (err: ApiError | any) {
            const [code, result] = handleError(err)
            res.status(code).send(result)
        }
    })()
}

export const handleRefreshToken = (req: Request, res: Response) => {
    (async () => {
        try {
            const cookie = req.cookies?.['refresh_token']
            if (!cookie) {
                res.sendStatus(401)
                return
            }
            const token = await refreshToken(cookie)
            res.send({ok: true, data: token})
        } catch (err: ApiError | any) {
            const [code, result] = handleError(err)
            res.status(code).send(result)
        }
    })()
}
