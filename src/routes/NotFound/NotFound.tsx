import React from 'react';
import './NotFound.scss';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist</p>
      <a href='/'>Go Home</a>
    </div>
  );
};

export default NotFound;
