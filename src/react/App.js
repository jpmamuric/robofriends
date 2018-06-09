import React, { Component } from 'react';


import CardList from './components/cardlist/CardList';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';
import Scroll from './components/scroll/Scroll';
import Searchbox from './components/searchbox/Searchbox';
import './App.css';

//does not need to be a class.
class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <h1 className="app__heading">Robofriends</h1>
        <Searchbox />
        <Scroll>
          <ErrorBoundry>
            <CardList />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
