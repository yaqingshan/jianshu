import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { GlobalIconfont } from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Head from './common/head';
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle/>
          <GlobalIconfont/>
          <Head />
          <BrowserRouter>
            <div>
              {/*exact 路径完全相同时才会出现对应内容*/}
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
