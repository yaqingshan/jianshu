import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import {
  ListWrapper,
  ListItem,
  LoadMore
} from '../style.js'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <ListWrapper>
      {
        list.map((item)=>{
          return(
            <Link key={item.get('title')} to='/detail'>
              <ListItem>
                <div className="list-info">
                  <h4>{item.get('title')}</h4>
                  <p className="abstract">{item.get('abstract')}</p>
                </div>
                <div className="img">
                  <img alt={item.get('title')} src={item.get('url')} />
                </div>
              </ListItem>
            </Link>
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
