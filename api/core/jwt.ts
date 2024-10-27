import { SignJWT } from 'jose/jwt/sign'
import { jwtVerify } from 'jose/jwt/verify'
import * as crypto from 'crypto'
import { ApiError } from './apiError'

export interface RefreshToken {
    userId: string;
    securityStamp: string;
}

const refreshTokenSecret = crypto.createSecretKey(Buffer.from('pBfeOeROZU7XxbGrY79GoBSLezJpDHXah_R5SIx6WfLE0', 'utf-8'))
export const signRefreshToken = async (payload: RefreshToken) => {
    return await new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer('urn:ferotechfr')
        .setAudience('urn:ferotechfr:quiz')
        .setExpirationTime('6h')
        .sign(refreshTokenSecret)
}

export const verifyRefreshToken = async (token: string) => {
    const { payload: { userId, securityStamp } } = await jwtVerify(token, refreshTokenSecret, {
        issuer: 'urn:ferotechfr',
        audience: 'urn:ferotechfr:quiz'
    })
    return { userId, securityStamp } as RefreshToken

}
