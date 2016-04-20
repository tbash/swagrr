import * as actionTypes from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export default function auth(state = {
    isFetching: false,
    isAuthenticated: AsyncStorage.getItem('access_token') ? true : false
  }, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case actionTypes.SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true
      })
    case actionTypes.SIGN_IN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      })
    case actionTypes.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
    }
}
