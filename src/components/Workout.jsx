import React from 'react';

function Workout({workout, onDelete}) {
    const {id, name, description, muscles} = workout;

    const handleDeleteClick = () => {
        onDelete(id);
      };

    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{muscles}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Workout;
