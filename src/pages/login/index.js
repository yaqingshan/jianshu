import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginInfo,
  InputWrpper,
  LoginBtn,
  LoginTips
} from './style'

class Login extends PureComponent {
  render () {
    const { isLogin, getUserName } = this.props;
    if(!isLogin) {
      console.log(isLogin)
      return (
        <LoginWrapper>
          <div className="title">登录</div>
          <LoginInfo>
            <InputWrpper>
              <span className="iconfont">&#xe636;</span>
              <input type="text" value="1" onChange={getUserName(this.user)} ref={(input)=>{this.user = input}} placeholder="手机号或邮箱" />
            </InputWrpper>
            <InputWrpper>
              <span className="iconfont">&#xe636;</span>
              <input type="password" value="2" ref={(input) => {this.pwd = input}} placeholder="密码" />
            </InputWrpper>
          </LoginInfo>
          <LoginTips>
            <div className="chk">
              <input type="checkbox"  /><label>记住我</label>
            </div>
            <span>登录遇到问题?</span>
          </LoginTips>
          <LoginBtn onClick={()=> this.props.login(this.user,this.pwd)}>登录</LoginBtn>
        </LoginWrapper>
      )
    } else {
      console.log(isLogin)
      return <Redirect to="/" />
    }

  }
}
const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login','isLogin'])
})
const mapDispatchToProps = (dispatch) => ({
  login(userElem, pwdElem) {
    dispatch(actionCreators.loginStatus(userElem.value,pwdElem.value))
  },
  getUserName(userElem) {
    console.log(userElem)
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
