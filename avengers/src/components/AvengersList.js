import React from "react";
import '../App.css';

const AvengersList = props => {
  console.log('in AvengersList', props)
  return (
    <div className="characters-list-wrapper">
      {props.avengers.map(avenger => (
        <div className="character-card" key={avenger.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <h3>{avenger.name}</h3>
          <button onClick={() => props.history.push(`/avengers/${avenger.id}`)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default AvengersList;