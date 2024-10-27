import { AuthToken } from '../../models/user/authToken'
import { Result } from '../../models/result';
import { appApi } from '../shared/utils/httpClient'
import { RegisterRequest } from '../../models/user/registerRequest';
import { LoginRequest } from '../../models/user/loginRequest';

export interface IAuthService {
    login(model: LoginRequest): Promise<Result<unknown>>
    logout(): Promise<Result<unknown>>
    register(model: {email: string, password: string, pseudo: string}): Promise<Result<unknown>>
    refreshToken(): Promise<Result<AuthToken>> 
}
class AuthService implements IAuthService {
    login(model: LoginRequest): Promise<Result<unknown>> {
        return appApi.post<unknown>('login', model)
    }
    register(model: RegisterRequest): Promise<Result<unknown>> {
        return appApi.post<unknown>('register', model)
    }
    refreshToken(): Promise<Result<AuthToken>> {
        return appApi.get<AuthToken>('refresh_token', {withCredentials: true})
    }
    logout() {
        return appApi.get<unknown>('logout')
    }
}
const authService: IAuthService = new AuthService
export default authService