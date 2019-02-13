import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { GlobalIconfont } from './statics/iconfont/iconfont.js'
import Head from './common/head'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle/>
          <GlobalIconfont/>
          <Head />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
