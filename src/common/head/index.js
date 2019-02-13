import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeadWrapper,
  Logo,
  NavContent,
  NavWrapper,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInput,
  BtnWrapper,
  Btn,
  SearchInfoWrapper
} from './style.js'

const Head =  (props) => {
  return (
    <Fragment>
      <HeadWrapper>
        <Logo/>
        <NavContent>
          <NavWrapper>
            <NavItem className="orange">首页</NavItem>
            <NavItem>下载APP</NavItem>
            <NavSearch>
              <CSSTransition
                in={props.focused}
                timeout={200}
                classNames="slide"
              >
                <SearchWrapper className={props.focused ? 'focused' : ''}>
                  <SearchInput
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                  />
                  <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</span>
                </SearchWrapper>
              </CSSTransition>
              {
                //搜索提示框
              }
              <SearchInfoWrapper>

              </SearchInfoWrapper>
            </NavSearch>
            <NavItem className="grey">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <NavItem className="grey">登录</NavItem>
          </NavWrapper>
        </NavContent>
        <BtnWrapper>
          <Btn>注册</Btn>
          <Btn className="on"><span className="iconfont">&#xe617;</span>写文章</Btn>
        </BtnWrapper>
      </HeadWrapper>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    //当使用了immutable时，需要用get方法获取数据
    //focused: state.head.focused
    //focused: state.head.get('focused')
    //将state也转化成immutable对象后 需要使用get获取head
    //focused: state.get('head').get('focused')
    focused: state.getIn(['head', 'focused'])

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //聚焦事件
    handleInputFocus(){
      dispatch(actionCreators.searchFocus())
    },
    //失焦事件
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head);
