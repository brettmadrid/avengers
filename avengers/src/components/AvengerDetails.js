import React from 'react';

const AvengerDetails = props => {
    return (
        <div>
            <h4>Nickname: {props.avenger.nickname}</h4>
            <p>{props.avenger.description}</p>
        </div>
    )
}

export default AvengerDetails;