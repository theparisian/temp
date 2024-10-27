import { AuthToken } from '../../../models/user/authToken';

export interface UserState {
    pseudo?: string
    token?: AuthToken
    trophyCount?: number
    loggedIn: boolean
}
