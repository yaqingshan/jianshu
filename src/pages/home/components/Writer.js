import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  WriteWrapper,
  WriteList,
  WriteItem
} from '../style.js'

class Writer extends Component {
  render() {
    return(
      <WriteWrapper>
        <WriteList>
          <WriteItem>
            <div className="avatar">
              <img url="https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
            </div>
            <div className="writer-info">
              <div className="name">须僧</div>
              <p>写了396.8k字 · 8.6k喜欢</p>
            </div>
            <div className="tag">+关注</div>
          </WriteItem>
        </WriteList>
      </WriteWrapper>
    )
  }
}

export default Writer;
