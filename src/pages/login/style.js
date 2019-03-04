import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  border-radius:4px;
  width: 400px;
  padding: 50px 0;
  left:50%;
  top: 50%;
  background:#ffffff;
  transform: translate(-50%,-50%);
  box-shadow: -moz-box-shadow:-1px 2px 15px #8F8989; -webkit-box-shadow:-1px 2px 15px #8F8989; box-shadow:-1px 2px 15px #8F8989;
  .title{
    color: #ea6f5a;
    font-size: 18px;
    text-align: center;
    padding-bottom: 50px;
  }
`
export const LoginInfo = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  overflow: hidden;
`
export const InputWrpper = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  box-sizing: border-box;
  background:hsla(0,0%,71%,.1);
  &:first-child{
    border-bottom: 1px solid #c8c8c8;
  }
  span {
    font-size: 18px;
    color: #969696;
  }
  input {
    flex:1;
    margin-left: 6px;
    height: 30px;
    line-height: 30px;
    color:#333;
    border:0px;
    outline: none;
    padding-left: 4px;
    background: none;
  }
`
export const LoginBtn = styled.div`
  width: 300px;
  margin: 28px auto 10px;
  height: 44px;
  border-radius: 22px;
  line-height: 44px;
  text-align: center;
  background:#3194d0;
  color: #ffffff;
  font-size: 18px;
`
export const LoginTips = styled.div`
  width: 300px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999;
  .chk{
    flex: 1;
    input {
      position:relative;
      top: 1px;
    }
  }
`
