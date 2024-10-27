import { RegisterRequest } from "../../../models/user/registerRequest"
import { ApiError } from "../../core/apiError";
import db from "../../../db";
import { User } from "../../../db/models/user";
import { newGuid, newTimeStamp } from "../../core/unique";
import { hashPassword, verifyPassword } from "../../core/password";
import { LoginRequest } from "../../../models/user/loginRequest";
import { RefreshToken, signRefreshToken, verifyRefreshToken } from "../../core/jwt";
import { AuthToken } from "../../../models/user/authToken";

export const register = async (request: RegisterRequest): Promise<void> => {
    // TODO normaliser email
    const email = request.email.toLocaleLowerCase()
    const u = await db.user.getByName(email)
    console.log(u)
    if (u) {
        throw new ApiError('user exists')
    }
    const pw = await hashPassword(request.password)
    const now = new Date()
    const user = {
        userName: email,
        normalizedUserName: email,
        email: email,
        normalizedEmail: request.email,
        passwordHash: pw,
        emailConfirmed: false,
        createdAt: now,
        lastLoginTime: now,
        securityStamp: newGuid(),
        concurrencyStamp: newTimeStamp(),
        pseudo: request.pseudo
    } as User
    await db.user.create(user)
}

export const login = async (request: LoginRequest): Promise<string> => {
    const un = request.userName.toLocaleLowerCase()
    const u = await db.user.getByName(un)
    console.log(u)
    if (!u) {
        throw new ApiError('Username or password is incorrect')
    }
    if (!await verifyPassword(request.password, u.passwordHash)) {
        throw new ApiError('Username or password is incorrect')
    }
    return await signRefreshToken({userId: u.id, securityStamp: u.securityStamp})
}

export const refreshToken = async (cookie: string): Promise<AuthToken> => {
    const payload = (await verifyRefreshToken(cookie)) as RefreshToken
    if (!payload) {
        throw new ApiError('Error')
    }
    const user = await db.user.getById(payload.userId)
    if (!user || user.securityStamp != payload.securityStamp) {
        throw new ApiError('Error')
    }
    return {pseudo: user.pseudo, secret: 'todo'}
}
