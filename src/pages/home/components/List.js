import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem
} from '../style.js'

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <ListWrapper>
      {
        list.map((item)=>{
          return(
            <ListItem>
              <div className="list-info">
                <h4>{item.get('title')}</h4>
                <p className="abstract">{item.get('abstract')}</p>
              </div>
              <div className="img">
                <img alt={item.get('title')} src={item.get('url')} />
              </div>
            </ListItem>
          )
        })
      }
      </ListWrapper>
    )
  }
}
const mapStateToProps = (state) =>({
  list: state.getIn(['home','articleList'])
})

export default connect(mapStateToProps,null)(List);
