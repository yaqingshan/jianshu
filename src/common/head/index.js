import React, { Component, Fragment } from 'react'
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
  SearchInfoWrapper,
  SearchInfoTop,
  SearchInfoList,
  SearchInfoItem
} from './style.js'

class Head extends Component {
  render () {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
                  in={focused}
                  timeout={200}
                  classNames="slide"
                >
                  <SearchWrapper className={focused ? 'focused' : ''}>
                    <SearchInput
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <span className={focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</span>
                  </SearchWrapper>
                </CSSTransition>
                {
                  //搜索提示框
                }
                { this.getArea() }
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

  // 聚焦显示搜索提示框信息，失焦不显示 传入 focused 参数
  getArea () {
    const { focused, currentPage, mouseIn, searchResultList, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    //immutable对象不支持索引，需要转换一下
    const newList = searchResultList.toJS();
    const pageList = [];
    for (let i = (currentPage-1) * 10; i < currentPage * 10; i++) {
      pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
    }
    if(focused || mouseIn) {
      return (
        <SearchInfoWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTop>
            <div className="title">热门搜索</div>
            <div onClick={handleChangePage}>换一批</div>
          </SearchInfoTop>
          <SearchInfoList>
            {/*此处的searchResultList是一个immutable数组*/}
            { pageList }
          </SearchInfoList>
        </SearchInfoWrapper>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    //当使用了immutable时，需要用get方法获取数据
    //focused: state.head.focused
    //focused: state.head.get('focused')
    //将state也转化成immutable对象后 需要使用get获取head
    //focused: state.get('head').get('focused')
    focused: state.getIn(['head', 'focused']),
    searchResultList: state.getIn(['head', 'searchResultList']),
    mouseIn: state.getIn(['head', 'mouseIn']),
    currentPage: state.getIn(['head', 'currentPage']),
    totalPage: state.getIn(['head', 'totalPage'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //聚焦事件
    handleInputFocus() {
      dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.searchFocus())
    },
    //失焦事件
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    //鼠标移入事件
    handleMouseEnter() {
      dispatch(actionCreators.changeMouseEnter())
    },
    //鼠标移除事件
    handleMouseLeave() {
      dispatch(actionCreators.changeMouseLeave())
    },
    //改变page数
    handleChangePage () {
      dispatch(actionCreators.changePage())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head);
