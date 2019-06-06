import React, { Fragment } from 'react';
import spinner from './../../img/spinner.gif';

const Spiner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spiner;
