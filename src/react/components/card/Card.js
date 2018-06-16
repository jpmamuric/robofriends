import React from 'react';

import './Card.css';

const Card = ({ robot: { id, name, email } }) => {
  return (
    <li className='card'>
      <img src={`https://robohash.org/${id}?size=300x300`} alt="robohash"/>
      <h1 className='card__name'>{name}</h1>
      <p className='card__email'>{ email }</p>
    </li>
  );
}

export default Card;
