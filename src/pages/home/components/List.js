import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
  ListWrapper,
  ListItem,
  LoadMore
} from '../style.js'

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <ListWrapper>
      {
        list.map((item)=>{
          return(
            <ListItem key={item.get('title')}>
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
      <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </ListWrapper>
    )
  }
}
const mapStateToProps = (state) =>({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapdispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps,mapdispatchToProps)(List);
