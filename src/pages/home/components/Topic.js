import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopItem } from '../style.js'

class Topic extends Component  {
  render() {
    const { list } = this.props;
    return(
      <TopicWrapper>
        {
          list.map((item)=>{
            return (
              <TopItem key={item.get('id')}>
                <img alt={item.get('title')} src={item.get('url')} />
                {item.get('title')}
              </TopItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home','topList'])
})
export default connect(mapStateToProps,null)(Topic);
