import React from 'react';
import { connect } from 'react-redux';

import './Searchbox.css';
import { changeSearchInput } from '../../../redux/actions/action-searchbox';

const Searchbox = ({ value, list, changeSearchInput }) => {
  return (
    <div className='searchbox-wrapper'>
      <input
        aria-label='search robots'
        value={value}
        className='searchbox'
        type='text'
        placeholder='search'
        onChange={e=>changeSearchInput(e.target.value, list)}/>
    </div>
  )
}

const mapStateToProps = (
  {
    searchbox: { value },
    robots: { list }
  }
) => ({ value, list });

export default connect(mapStateToProps, {changeSearchInput})(Searchbox);
