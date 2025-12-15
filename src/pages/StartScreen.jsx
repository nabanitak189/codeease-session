import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";
import flower from "../assets/flower.svg";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="app-center">
      <div className="panel container fade-in center-column soft-outline">
        <img src={flower} className="illustration" alt="flower" />
        <h1 className="title sparkle">Welcome to the Game! 🌸</h1>
        <p className="subtitle">Select your difficulty level to start:</p>
        <div className="buttonContainer">
          <button className="btn" onClick={() => handleDifficultySelect("Easy")}>
            Easy
          </button>
          <button className="btn" onClick={() => handleDifficultySelect("Medium")}>
            Medium
          </button>
          <button className="btn" onClick={() => handleDifficultySelect("Hard")}>
            Hard
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
