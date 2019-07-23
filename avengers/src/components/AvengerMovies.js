import React from 'react';

const AvengerMovies = (props) => {
    return (
        <div>
            <h2>Movies</h2>
            {props.avenger.movies.map(movie => (
                <h4>{movie}</h4>
            ))}
        </div>
    )
}

export default AvengerMovies;