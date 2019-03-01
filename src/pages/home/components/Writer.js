import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterTop,
  WriterList,
  WriterItem
} from '../style.js'

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return(
      <WriterWrapper>
      <WriterTop>
        <div className="title">推荐作者</div>
        <div className="refresh">
          <span className="iconfont">&#xe616;</span>换一批
        </div>
      </WriterTop>
        <WriterList>
          {
            list.map((item) => {
              return(
                <WriterItem key={item.get('id')}>
                  <div className="avatar">
                    <img alt={item.get('id')} src={item.get('avatar')} />
                  </div>
                  <div className="writer-info">
                    <div className="name">{item.get('name')}</div>
                    <p>{item.get('desc')}</p>
                  </div>
                  <div className="tag">+关注</div>
                </WriterItem>
              )
            })
          }
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','writerList'])
})

export default connect(mapStateToProps)(Writer);
