import React from 'react';
import { connect } from 'react-redux';

import './Searchbox.css';
import { changeSearchInput } from '../../../redux/actions/action-searchbox';

const Searchbox = ({ value, changeSearchInput }) => {
  return (
    <div className='searchbox-wrapper'>
      <input value={value} className='searchbox' type='text' placeholder='search' onChange={e=>changeSearchInput(e.target.value)}/>
    </div>
  )
}

const mapStateToProps = ({ searchbox: { value }}) => ({ value });

export default connect(mapStateToProps, {changeSearchInput})(Searchbox);
