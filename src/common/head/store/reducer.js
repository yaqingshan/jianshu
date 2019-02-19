import * as actionTypes from './actionTypes'
//引入immutable库 使之不可变
//会转化为一个immutable对象
import { fromJS } from 'immutable'

//调用fromJS方法 转化为 immutable对象
const defaultState = fromJS({
  focused: false,
  searchResultList: [],
  mouseIn: false,
  currentPage:1,
  totalPage:1
})
//优化前写法
// export default (state = defaultState, action ) => {
//   if(action.type === actionTypes.SEARCH_FOCUS) {
//     //immutable的set方法，会结合之前inmmutable对象的值
//     //和设置的值返回一个新的对象
//     return state.set('focused', true);
//     // {
//     //   focused: true
//     // }
//   }
//   if(action.type === actionTypes.SEARCH_BLUR) {
//     return state.set('focused', false);
//     // {
//     //   focused: false
//     // }
//   }
//   if(action.type === actionTypes.GET_SEARCH_LIST) {
//     return state.set('searchResultList', action.data);
//   }
//   return state;
// }

//优化后写法
export default (state = defaultState, action ) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.GET_SEARCH_LIST:
      return state.set('searchResultList', action.data).set('totalPage', action.totalPage);
    case actionTypes.CHANGE_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.CHANGE_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('currentPage', 2);
    default:
      return state;
  }
}
