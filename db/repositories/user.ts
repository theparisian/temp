import { User } from "../models/user"
import dbClient from "../dbClient"

const getByName = async (userName: string) => {
    const item = await dbClient.select('*').from<User>('users').where('userName', userName).first()
    return item.id ? item : null
}
const getById = async (userId: string) => {
    const item = await dbClient.select('*').from<User>('users').where('id', userId).first()
    return item.id ? item : null
}

const create = async (user: User) => {
    return await dbClient.insert(user).into<User>('users')
}

export default {
    getByName,
    getById,
    create
}