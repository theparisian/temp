import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import Auth from './Auth'
import authService from '../authService'
import User from './User'
import { setToken } from './userSlice'
import { UserState } from './userState'

const selectUserLoggedIn = createSelector<{user: UserState}, UserState, boolean>(
    state => state.user,
    user  => user.loggedIn
)
const AuthUser = () => {
    const loggedIn = useSelector(selectUserLoggedIn)
    const dispatch = useDispatch()
    useEffect(() => {
        authService.refreshToken()
        .then(result => {
            if (result.ok) {
                dispatch(setToken(result.data))
            }
        })
        
    }, [dispatch])
    return (
        <>
            {!loggedIn && <Auth></Auth>}
            {loggedIn && <User></User>}
        </>
    )
}
export default AuthUser