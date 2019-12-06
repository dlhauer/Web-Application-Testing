import React from 'react';

function Display({count}) {
  return (
    <div className='display'>
      <h2>At bat</h2>
      <p>strikes: {count.strikes}</p>
      <p>balls: {count.balls}</p>
    </div>
  );
}

export default Display;