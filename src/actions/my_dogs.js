import * as actionTypes from '../constants/ActionTypes'
import { API_ROOT } from '../constants/Config'
import { AsyncStorage } from 'react-native';
import { CALL_API } from '../middleware/api';

function getMyDogs() {

}


export function loadSomeObj(someKey, requiredFields = []) {
  return (dispatch, getState) => {
    // Not req, used for caching, if not needed to not pass in getState or requiredFields
    // Ex for usage would be something not expected to change such as a role or genre
    const someObj = getState().someState.someObjs[someKey]
    if (someObj && requiredFields.every(key => someObj.hasOwnProperty(key))) {
      return null
    }
​
    return dispatch(fetchSomeObj(someKey))
  }
}