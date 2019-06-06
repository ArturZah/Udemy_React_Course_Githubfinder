import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchAlert from './SearchAlert';

const Search = ({ showClear, clearUsers, showAlert, searchUsers }) => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    searchUsers(text);
    setText('');
  };

  return (
    <div>
      {showAlert && <SearchAlert />}
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          onChange={e => onChange(e)}
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.bool.isRequired
};

export default Search;
