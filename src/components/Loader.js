import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress color="inherit" size={80} />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
