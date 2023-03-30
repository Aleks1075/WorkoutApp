import React, { useState } from "react";

function WorkoutForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [muscles, setMuscles] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description, muscles });
    setName("");
    setDescription("");
    setMuscles("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className="input-group"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          className="input-group"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Muscles:
        <input
          type="text"
          value={muscles}
          onChange={(event) => setMuscles(event.target.value)}
        />
      </label>
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;