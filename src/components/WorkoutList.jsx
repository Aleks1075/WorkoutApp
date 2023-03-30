import React from 'react';
import Workout from './Workout';

function WorkoutList({ workouts, onDelete }) {
  return (
    <div>
      {workouts.map(workout => 
        <Workout key={workout.name} workout={workout} onDelete={onDelete}/>
      )}
      </div>
  );
}

export default WorkoutList;