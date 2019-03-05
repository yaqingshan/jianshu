import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  isLogin: false,
  username: null,
  password: null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
        return state.set('isLogin',true)
      break;
    case actionTypes.IS_LOGOUT:
        return state.set('isLogin',false)
      break;
    case actionTypes.GET_USER:
        return state.set('username',action.name)
      break;
    default:
      return state;

  }
}
