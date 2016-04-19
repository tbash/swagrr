import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import signIn from './signIn'

const rootReducer = combineReducers({
  signIn,
  routing
})

export default rootReducer
