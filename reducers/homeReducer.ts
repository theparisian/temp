import { combineReducers } from 'redux'
import userReducer from '../components/app/user/userSlice'

const homeReducer =  combineReducers({
  user: userReducer
})
export default homeReducer
