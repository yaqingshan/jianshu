import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const homeAction = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topList: fromJS(result.topList),
  articleList:fromJS(result.articleList),
  recommendList:fromJS(result.recommendList),
  writerList:fromJS(result.writerList)
})
const articleMore = (result, nextpage) => ({
  type: actionTypes.GET_MORE_ARTICLE,
  list: fromJS(result),
  nextpage
})

export const getHomeData = (dispatch) => {
  return (dispatch) => {
    axios.get('api/homedata.json').then((res)=>{
      const result = res.data;
      dispatch(homeAction(result))
    }).catch((error)=>{
      console.log('error')
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/getmore.json?page='+page).then((res) => {
      const result = res.data.articleList;
      dispatch(articleMore(result, page+1))
    }).catch(()=>{
      console.log('error')
    })
  }
}

export const toggleBackTop = (show) => ({
  type: actionTypes.TOGGLE_BACK_TOP,
  show
})
// export const toggleBackTop = (show) => ({
//   type: actionTypes.TOGGLE_BACK_TOP,
//   show
// })
