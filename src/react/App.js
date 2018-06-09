import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Header from './components/header/Header';
// import LazyLoad from './containers/LazyLoad';
import LazyLoad2 from './containers/LazyLoad2';

const LazyLoadAbout = LazyLoad2(()=>{
  return import('./components/pages/About');
});

//does not need to be a class.
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route exact path='/about' component={LazyLoadAbout} />
      </div>
    );
  }
}

export default App;
