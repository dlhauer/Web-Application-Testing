import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App() {

// const [strikes, setStrikes] = useState(0);
// const [balls, setBalls] = useState(0);
// const [hit, setHit] = useState(false);
const [count, setCount] = useState( {
  strikes: 0,
  balls: 0,
})

  return (
    <div className="App">
      <Display count={count}/>
      <Dashboard count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
