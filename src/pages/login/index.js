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
    const { isLogin, login } = this.props;
    if(!isLogin) {
      return (
        <LoginWrapper>
          <div className="title">登录</div>
          <LoginInfo>
            <InputWrpper>
              <span className="iconfont">&#xe751;</span>
              <input type="text" defaultValue="" ref={(input)=>{this.user = input}} placeholder="手机号或邮箱" />
            </InputWrpper>
            <InputWrpper>
              <span className="iconfont">&#xe61e;</span>
              <input type="password" defaultValue="" ref={(input) => {this.pwd = input}} placeholder="密码" />
            </InputWrpper>
          </LoginInfo>
          <LoginTips>
            <div className="chk">
              <input type="checkbox"  /><label>记住我</label>
            </div>
            <span>登录遇到问题?</span>
          </LoginTips>
          <LoginBtn onClick={()=> login(this.user,this.pwd)}>登录</LoginBtn>
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
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
