import React, { useState } from "react";

const Overlay = ({ show, onClose, onCreateAccount }) => {
  const [username, setUsername] = useState("");

  const handleCreateAccount = () => {
    if (username.trim() !== "") {
      onCreateAccount(username);
    }
  };

  if (!show) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Create Local Account</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <button onClick={handleCreateAccount}>Okay</button>
        <button onClick={onClose}>Exit</button>
      </div>
    </div>
  );
};

export default Overlay;
