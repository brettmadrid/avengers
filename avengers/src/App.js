import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';

import avengersData from './data';

import './App.css';

function App() {

  console.log('avengersData', avengersData)

  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink to="/" activeClassName="activeNavButton">Home</NavLink>
        </li>
        <li>
          <NavLink to="/avengers" activeClassName="activeNavButton">Avengers</NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Home} />

      <Route 
        exact path="/avengers" 
        render={props => <AvengersList {...props} avengers={avengersData} />}
      />

      <Route 
        path='/avengers/:id' 
        render={props => <AvengerPage {...props} avengers={avengersData} />} 
      />
    </div>
  );
}

export default App;
