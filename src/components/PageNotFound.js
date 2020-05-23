import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container">
      <p>Oh no! Looks like you got lost!</p>
      <p>
        Let's help you back <Link to="/">home</Link>.
      </p>
    </div>
  );
};

export default PageNotFound;
