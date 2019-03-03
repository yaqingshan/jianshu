import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  DetailInfo
} from './style'

class Detail extends Component {
  render () {
    const { title, info } = this.props
    return (
      <DetailWrapper>
        <h1>{title}</h1>
        <DetailInfo dangerouslySetInnerHTML = {{__html:info}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDetailInfo(id)
  }
}

const mapStateToProps = (state) =>({
  title: state.getIn(['detail','detailTitle']),
  info: state.getIn(['detail','detailInfo'])
})

const mapdispatchToProps = (dispatch) => ({
  getDetailInfo(id) {
    dispatch(actionCreators.getDetailInfo(id))
  }
})

export default connect(mapStateToProps,mapdispatchToProps)(Detail);
