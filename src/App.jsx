import React, { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import SearchBar from './components/SearchBar';
import PopUp from './components/PopUp';
import './styles/App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Fetch workouts from the JSON server
  useEffect(() => {
    fetch('http://localhost:5000/workouts')
      .then((response) => response.json())
      .then((data) => setWorkouts(data));
  }, []);

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddWorkout = async (newWorkout) => {
    // Make a POST request to the JSON server
    const response = await fetch('http://localhost:5000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWorkout),
    });
  
    // Get the workout object returned by the server (including the generated ID)
    const savedWorkout = await response.json();
  
    // Add the workout to the local state
    setWorkouts([...workouts, savedWorkout]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleDeleteWorkout = async (id) => {
    // Make a DELETE request to the JSON server
    await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
    });
  
    // Remove the workout from the local state
    setWorkouts(workouts.filter((workout) => workout.id !== id));
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
      <WorkoutList workouts={workoutsToDisplay} onDelete={handleDeleteWorkout}/>
      <PopUp showPopup={showPopup} onClose={handlePopupClose}/>
    </div>
  );
}

export default App;