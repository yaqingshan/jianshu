import styled from 'styled-components'
import logoImg from './../../statics/nav-logo.png'

export const HeadWrapper = styled.div`
  position: fixed;
  left:0;
  top:0;
  right: 0;
  z-index:99;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`
export const HeadWith = styled.div`
  max-width:1400px;
  margin: 0 auto;
  display: flex;
  align-items: center
`
export const Logo = styled.div`
  display: block;
  width:100px;
  height: 56px;
  background: url(${logoImg}) no-repeat center top;
  background-size: contain;
`
export const NavContent = styled.div`
  flex: 1;
`
export const NavWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  line-height: 56px;
`
export const NavSearch = styled.div`
  flex: 1;
  position: relative;
`
export const SearchInfoWrapper = styled.div`
  position: absolute;
  width: 70%;
  left: 0;
  top: 52px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTop = styled.div`
  display: flex;
  cursor:pointer;
  font-size: 14px;
  color: #969696;
  .title {
    flex:1;
  }
  .refresh {
    display: flex;
    align-items: center;
    .iconfont{
      margin-right: 6px;
      transition: all .4s ease-in;
      transform-origin: 50%;
    }
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  cousor:pointer;
  display: block;
  float: left;
  line-height:150%;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`
export const SearchWrapper = styled.div`
  width: 50%
  height: 38px;
  border-radius: 19px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #eee;
  &.focused {
    width: 70%;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 70%;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 50%;
  }
  .iconfont{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius:50%;
    text-align: center;
    margin-right:8px;
    &.focused {
      background: rgba(0,0,0,.4);
      color: #fff;
    }
  }
`
export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  display: block
  font-size: 16px;
  padding-left: 40px;
  flex:1;
  height: 38px;
  line-height: 38px;
  border:0;
  outline: none;
  background: transparent;
`
export const NavItem = styled.div`
  font-size: 16px
  color: #333;
  padding: 0 20px;
  cursor: pointer;
  &.orange {
    color: #ea6f5a;
  }
  &.grey {
    color: #969696;
  }
`
export const BtnWrapper = styled.div`
  font-size: 0;
  text-align: center;
`
export const Btn = styled.div`
  display: inline-block;
  color: #ea6f5a;
  font-size: 14px;
  height: 38px;
  line-height: 38px;
  border-radius: 20px;
  border: 1px solid #ea6f5a;
  padding: 0 25px;
  margin-right: 15px;
  &.on {
    color:#ffffff;
    font-size: 15px;
    background: #ea6f5a;
    .iconfont {
      padding-right: 6px;
    }
  }
`
