import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const searchList = (data) => ({
  type: actionTypes.GET_SEARCH_LIST,
  // 将数据改为immutable 对象
  data: fromJS(data)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
export const getSearchList = () => {
  return (dispatch) => {
    axios.get('api/serchlist.json').then((res)=>{
      const data = res.data;
      dispatch(searchList(data.result))
    }).catch(()=>{
      console.log('error')
    })
  }
}
