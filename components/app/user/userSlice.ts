import { createSlice } from '@reduxjs/toolkit'
import { AuthToken } from '../../../models/user/authToken'
import { UserState } from './userState'

type UserReducers = {
    setToken: (state: UserState, action: {type: string, payload: AuthToken}) => void
    setTrophyCount: (state: UserState, action: {type: string, payload: number}) => void
}

const userSlice = createSlice<UserState, UserReducers, 'user'>({
  name: 'user',
  initialState: { loggedIn: false },
  reducers: {
    setToken(state, action) {
      const token = action.payload
      if (token) {
        state.pseudo = token.pseudo
        state.token = token
        state.loggedIn = true
      } else {
          state.pseudo = undefined
          state.token = undefined
          state.loggedIn = false
      }
    },
    setTrophyCount(state, action) {
        const count = action.payload
        state.trophyCount = count
    }
  }
})

export const { setToken, setTrophyCount } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer