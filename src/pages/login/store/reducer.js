import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return state.set('isLogin',true)
    case actionTypes.IS_LOGOUT:
      return state.set('isLogin',false)
    default:
      return state;

  }
}
