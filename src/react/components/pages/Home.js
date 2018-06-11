import React from 'react';

import CardList from '../cardlist/CardList';
import ErrorBoundry from '../error-boundry/ErrorBoundry';
import Searchbox from '../searchbox/Searchbox';

// import Scroll from '../scroll/Scroll';

import '../../App.css';

const Home = () => {
  return (
    <div className="app__wrapper">
      <h1 className="app__heading">Robofriends</h1>
      <Searchbox />
      <ErrorBoundry>
        <CardList />
      </ErrorBoundry>
    </div>
  );
}

export default Home;
