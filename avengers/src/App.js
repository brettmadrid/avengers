import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Avengers from './components/Avengers';
import avengers from './data';
import './App.css';

function App() {

  const [ avengersData, setAvengersData ] = useState([])

  useEffect(() => {
    return () => {
      setAvengersData(avengers)
    };
  }, [avengersData])

  console.log('avengersData', avengersData)

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/avengers" component={Avengers} />
    </div>
  );
}

export default App;
