import React from 'react'
//react-loadable这个库可以帮助我们按需加载
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return(
      <div>正在加载中...</div>
    )
  }
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
