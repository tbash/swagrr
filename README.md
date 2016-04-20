# swagrr

#Login Auth

To connect to other routes other than /auth, you'll need to add the devise_token_auth headers to your request.


# Making API Calls

This is the general pattern to how to make the items.
```
// src/constants/ActionTypes.js
export const SOME_OBJ_REQUEST = 'SOME_OBJ_REQUEST'
export const SOME_OBJ_SUCCESS = 'SOME_OBJ_SUCCESS'
export const SOME_OBJ_FAILURE = 'SOME_OBJ_FAILURE'
​
// src/actions/someObj.js
function fetchSomeObj(someKey) {
  return {
    [CALL_API]: {
      types: [ SOME_OBJ_REQUEST, SOME_OBJ_SUCCESS, SOME_OBJ_FAILURE ],
      endpoint: `some_obj/${someKey}`,
      schema: Schemas.SOME_OBJ,
    ......
    }
  }
}
​
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
```