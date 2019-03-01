//redux-immutable 统一数据格式 使state也变成immutable 对象
import { combineReducers } from 'redux-immutable'
import { reducer as headReducer } from '../common/head/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers ({
  head: headReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer;
