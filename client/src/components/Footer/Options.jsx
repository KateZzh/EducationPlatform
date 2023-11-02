import React from 'react';
import { Link } from 'react-router-dom';

const Options = (props) => {
  return (
    <>
      {props.data.map((el, index) => (
        <Link to={'/*'}>
          <p key={index}>{el}</p>
        </Link>
      ))}
    </>
  );
};

export default Options;
