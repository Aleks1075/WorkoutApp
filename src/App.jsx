import { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const workoutsToDisplay = workouts.filter((workout) => {
    return workout.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Workout App</h1>
      <SearchBar placeholder="Search by name" changeHandler={changeHandler} />
      <WorkoutForm onSubmit={handleAddWorkout} />
      <WorkoutList workouts={workoutsToDisplay} />
    </div>
  );
}

export default App;