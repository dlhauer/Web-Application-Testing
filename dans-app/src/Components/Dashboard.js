import React from 'react';

function Dashboard({count, setCount}) {

  // function handleStrike() {
  //   props.setStrikes( props.strikes + 1 );
  //   if ( props.strikes === 2 ) {
  //     props.setStrikes(0);
  //     props.setBalls(0);
  //   }
  // }

  // function handleBall() {
  //   props.setBalls( props.balls + 1 );
  //   if ( props.balls === 3 ) {
  //     props.setBalls(0);
  //     props.setStrikes(0)
  //   }
  // }

  function handlePitch(type) {
    if (type === 'strike') {
      setCount({...count, strikes: count.strikes + 1});
      if (count.strikes === 2) {
        setCount({strikes: 0, balls: 0});
      }
    }
    if (type === 'ball') {
      setCount({...count, balls: count.balls + 1});
      if (count.balls === 3) {
        setCount({strikes: 0, balls: 0});
      }
    }
    if (type === 'foul' && count.strikes < 2) {
      setCount({...count, strikes: count.strikes + 1});
    }
    if (type === 'hit') {
      setCount({
        strikes: 0,
        balls: 0
      })
    }
  }

  // console.log(count);

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <button 
        data-testid='strike-button'
        onClick={ () => handlePitch('strike')}
        >strike</button>
      <button 
        data-testid='ball-button'
        onClick={ () => handlePitch('ball')}
        >ball</button>
      <button 
        data-testid='foul-button'
        onClick={ () => handlePitch('foul')}
        >foul</button>
      <button 
        data-testid='hit-button'
        onClick={ () => handlePitch('hit')}
        >hit</button>
    </div>
  );
}

export default Dashboard;