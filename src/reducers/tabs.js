import * as actionTypes from '../constants/ActionTypes';

export default function tabs(state = {
    selectedTab: 'feed'
  }, action) {
  switch (action.type) {
    case actionTypes.SELECT_TAB:
      return Object.assign({}, state, {
        selectedTab: action.tab
      })
    default:
      return state
    }
}
