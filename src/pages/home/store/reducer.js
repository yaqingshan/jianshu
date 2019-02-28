import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes.js'

const defaultState = fromJS({
  topList: [],
  articleList:[],
  recommendList:[],
  writerList:[],
  articlePage: 1,
  showBackTop: false
})

const changehomedata = (state,action) => {
  return state.merge({
    topList: action.topList,
    articleList: action.articleList,
    recommendList: action.recommendList,
    writerList: action.writerList
  })
}

const getmorearticle = (state,action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextpage
  })
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changehomedata(state,action)
    case actionTypes.GET_MORE_ARTICLE:
      return getmorearticle(state,action)
    case actionTypes.TOGGLE_BACK_TOP:
      return state.set('showBackTop',action.show)
    default:
      return state;
  }
}
