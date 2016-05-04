import { SELECT_TAB } from '../constants/ActionTypes'

export const selectTab = (tab) => {
  return {
    type: SELECT_TAB,
    tab: tab
  }
}