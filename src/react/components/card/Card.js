import React from 'react';

import './Card.css';

const Card = ({ robot: { id, name, email } }) => {
  return (
    <div className='card'>
      <img src={`https://robohash.org/${id}?200x200`} alt="robohash"/>
      <h1>{name}</h1>
      <p>{ email }</p>
    </div>
  );
}

export default Card;
