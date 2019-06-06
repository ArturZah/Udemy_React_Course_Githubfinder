import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github p' />
        {title}
      </h1>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GithubFinder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
