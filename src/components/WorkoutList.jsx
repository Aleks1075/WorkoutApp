import React from 'react';
import Workout from './Workout';

function WorkoutList({ workouts }) {
  return (
    <div>
      {workouts.map(workout => 
        <Workout key={workout.name} workout={workout} />
      )}
      </div>
  );
}

export default WorkoutList;