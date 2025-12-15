import React from "react";
import { useLocation } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="app-center game-root">
      <div className="panel game-panel fade-in">
        <h1 className="game-title">Game Page</h1>
        <p className="game-subtitle">
          Selected Difficulty: <span className="badge">🌸 {difficulty}</span>
        </p>
      </div>
    </div>
  );
};

export default GameScreen;
