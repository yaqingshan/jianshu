import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defalutState = fromJS({
  detailTitle: null,
  detailInfo: null
})

export default (state = defalutState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_INFO :
      return state.merge({
        detailTitle: action.title,
        detailInfo: action.content
      })
    default:
      return state;
  }
}
