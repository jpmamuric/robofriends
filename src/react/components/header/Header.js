import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className='header' >
    <nav className='header__nav'>
      <Link className='header__link' to='/robofriends'>Home</Link>
      <Link className='header__link' to='/about'>About</Link>
    </nav>
  </header>
);

export default Header;
