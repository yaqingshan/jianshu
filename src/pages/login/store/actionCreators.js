import axios from 'axios'
import * as actionTypes from './actionTypes'

const login = (val) =>({
  type: actionTypes.IS_LOGIN,
  val: true
})

export const logout = (val) => ({
  type: actionTypes.IS_LOGOUT,
  val: false
})

export const loginStatus = (user,pwd) => {
  return (dispatch) => {
    axios.get('/api/login.json?user='+user+'&pwd='+pwd).then((res)=>{
      const result = res.data;
      if(result.data) {
        dispatch(login())
      }
    }).catch((error)=>{
      console.log(error)
    })
  }
}
