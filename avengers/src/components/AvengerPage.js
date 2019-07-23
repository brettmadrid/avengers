import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import AvengerDetails from "./AvengerDetails";
import AvengerMovies from "./AvengerMovies";

const AvengerPage = props => {
  console.log('match.params.id', typeof props.match.params.id)
  // avenger.id is an integer while match.params.id is a string - so convert one or the other
  const avenger = props.avengers.find(avenger => `${avenger.id}` === props.match.params.id) 
  
  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
      </div>

      <Link to={`/avengers/${avenger.id}/details`}>Qualities</Link>
      <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>

      <Switch>
        <Route
          path="/avengers/:id/details"
          render={() => <AvengerDetails avenger={avenger} />}
        />
        <Route
          path="/avengers/:id/movies"
          render={() => <AvengerMovies avenger={avenger} />}
        />
      </Switch>
    </div>
  );
};

export default AvengerPage;
