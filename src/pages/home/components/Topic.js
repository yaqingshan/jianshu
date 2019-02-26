import React, { Component } from 'react'
import { TopicWrapper, TopItem } from '../style.js'

class Topic extends Component  {
  render() {
    return(
      <TopicWrapper>
        <TopItem>
          <img alt="社会热点" src="//upload-images.jianshu.io/upload_images/11995366-e8db462842a15a03?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          社会热点
        </TopItem>
        <TopItem>
          <img alt="社会热点" src="//upload-images.jianshu.io/upload_images/11995366-e8db462842a15a03?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          社会热点
        </TopItem>
        <TopItem>
          <img alt="社会热点" src="//upload-images.jianshu.io/upload_images/11995366-e8db462842a15a03?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          社会热点
        </TopItem>
      </TopicWrapper>
    )
  }
}

export default Topic;
