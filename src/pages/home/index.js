import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Writer from './components/Writer.js'
import Topic from './components/Topic.js'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style.js'

class Home extends PureComponent {
  // PureComponent 纯组件 在底层运用了 shouldComponentUpdate 减少了每个组件中render函数不必要的执行
  // PureComponent 需要与 immutable.js 结合使用
  handleBackTop() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <div className="banner">
            <img alt="banner" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          </div>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showBackTop ? <BackTop onClick={this.handleBackTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  //只执行一次
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  //组件销毁时 解绑事件
  componentWillUnmount(){
    window.removeEventListener("scroll",this.props.toggleBackTop)
  }
  bindEvents() {
    window.addEventListener("scroll",this.props.toggleBackTop)
  }
}
const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['home','showBackTop'])
})
const mapdispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  toggleBackTop() {
    if(document.documentElement.scrollTop > 50){
      dispatch(actionCreators.toggleBackTop(true))
    } else {
      dispatch(actionCreators.toggleBackTop(false))
    }

  }
})

export default connect(mapStateToProps,mapdispatchToProps)(Home);
