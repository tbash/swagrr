import { combineReducers } from 'redux'
import auth from './auth'
import tabs from './tabs'

const rootReducer = combineReducers({
  auth,
  tabs
})

export default rootReducer
