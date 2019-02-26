import { fromJS } from 'immutable'

const defaultState = fromJS({
  TopList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
