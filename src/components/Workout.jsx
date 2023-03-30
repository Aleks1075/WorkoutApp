import React from 'react';

function Workout({workout}) {
    const {name, description, muscles} = workout;

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{muscles}</p>
        </div>
    )
}

export default Workout;
