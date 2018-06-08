import React from 'react';

import './CardList.css';
import Card from '../card/Card';
import { robots } from '../../robots';

const CardList = () => (
  <ul className="robot__list">
    { robots.map(robot => <Card key={robot.id} robot={robot}/> ) }
  </ul>
);

export default CardList;
