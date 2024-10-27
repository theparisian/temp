export interface User {
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: number
    pseudo: string
    createdAt: Date
    lastLoginTime: Date
}
