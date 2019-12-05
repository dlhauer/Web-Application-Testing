import React from 'react';

function Display(props) {
  return (
    <div className='display'>
      <h2>At bat</h2>
      <p>strikes: {props.count.strikes}</p>
      <p>balls: {props.count.balls}</p>

    </div>
  );
}

export default Display;