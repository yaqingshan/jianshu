import * as actionTypes from './actionTypes'
//引入immutable库 使之不可变
//会转化为一个immutable对象
import { fromJS } from 'immutable'

//调用fromJS方法 转化为 immutable对象
const defaultState = fromJS({
  focused: false
})
export default (state = defaultState, action ) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    //immutable的set方法，会结合之前inmmutable对象的值
    //和设置的值返回一个新的对象
    return state.set('focused', true)
    // {
    //   focused: true
    // }
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
    // {
    //   focused: false
    // }
  }
  return state;
}
