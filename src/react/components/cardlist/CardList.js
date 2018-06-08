import React, { Component } from 'react';
import axios from 'axios';

import './CardList.css';
import Card from '../card/Card';

class CardList extends Component  {
  state = {
    robots: null
  };

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ robots: res.data });
  }

  render(){
    if (!this.state.robots) {
      return <div> Loading... </div>
    }

    return (
      <ul className="robot__list">
        { this.state.robots.map(robot => <Card key={robot.id} robot={robot}/> ) }
      </ul>
    );
  }
}

export default CardList;
