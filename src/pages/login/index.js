import React, { PureComponent } from 'react';
import {
  LoginWrapper,
  LoginInfo,
  InputWrpper,
  LoginBtn,
  LoginTips
} from './style'

class Login extends PureComponent {
  render () {
    return (
      <LoginWrapper>
        <div className="title">登录</div>
        <LoginInfo>
          <InputWrpper>
            <span className="iconfont">&#xe636;</span><input type="text" value="" placeholder="手机号或邮箱" />
          </InputWrpper>
          <InputWrpper>
            <span className="iconfont">&#xe636;</span><input type="text" value="" placeholder="密码" />
          </InputWrpper>
        </LoginInfo>
        <LoginTips>
          <div className="chk">
            <input type="checkbox"  /><label>记住我</label>
          </div>
          <span>登录遇到问题?</span>
        </LoginTips>
        <LoginBtn>登录</LoginBtn>
      </LoginWrapper>
    )
  }
}

export default Login;
