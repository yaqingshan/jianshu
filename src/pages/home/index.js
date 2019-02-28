import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import Writer from './components/Writer.js'
import Topic from './components/Topic.js'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style.js'

class Home extends Component {
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
      </HomeWrapper>
    )
  }
  //只执行一次
  componentDidMount() {
    axios.get('api/homedata.json').then((res)=>{
      const result = res.data;
      const action = {
        type: 'change_home_data',
        topList: result.topList,
        articleList:result.articleList,
        recommendList:result.recommendList,
        writerList:result.writerList
      }
      this.props.changeHomeData(action)
    }).catch((error)=>{
      console.log('error')
    })
  }
}
const mapdispatchToProps = (dispatch) => ({
  changeHomeData(action){
    dispatch(action)
  }
})

export default connect(null,mapdispatchToProps)(Home);
