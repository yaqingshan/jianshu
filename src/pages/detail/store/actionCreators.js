import * as actionTypes from './actionTypes';
import axios from 'axios'

const getDetail = (title,content) =>({
  type: actionTypes.GET_DETAIL_INFO,
  title,
  content
})

export const getDetailInfo = (id) => {
  return (dispatch) =>{
    axios.get('api/detaildata.json?id='+id).then((res)=>{
      const result = res.data;
      console.log(result)
      dispatch(getDetail(result.detailTitle,result.detailInfo))
    }).catch((error)=>{
      console.log(error)
    })
  }
}
