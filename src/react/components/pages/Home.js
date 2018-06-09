import React from 'react';

import CardList from '../cardlist/CardList';
import ErrorBoundry from '../error-boundry/ErrorBoundry';
import Scroll from '../scroll/Scroll';
import Searchbox from '../searchbox/Searchbox';

import '../../App.css';

const Home = () => {
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

export default Home;
