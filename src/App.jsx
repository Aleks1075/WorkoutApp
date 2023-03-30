import { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import SearchBar from './components/SearchBar';
import PopUp from './components/PopUp';
import './styles/App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
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
      <PopUp showPopup={showPopup} onClose={handlePopupClose}/>
    </div>
  );
}

export default App;