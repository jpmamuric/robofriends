import React, { Component } from 'react';

import CardList from './components/cardlist/CardList';
import './App.css';

//does not need to be a class.
class App extends Component {
  render() {
    return (
      <div className="robot__wrapper">
        <h1 className="robot__heading">Robofriends</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
