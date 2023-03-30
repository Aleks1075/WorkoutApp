import React from "react";
import "../styles/App.css";

function Popup({ showPopup, onClose }) {
  if (!showPopup) return null;
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>Workout successfully added!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Popup;