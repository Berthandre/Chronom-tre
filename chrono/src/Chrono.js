
import React, { useState, useRef } from "react";
import Button from './Button'


const Chronometre = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10); 
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${getMilliseconds}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Chronomètre:</h1>
      <div style={{ fontSize: "3em", marginBottom: "20px" }}>
        {formatTime(time)}
      </div>
      <div>
        <Button onClick={startTimer} disabled={isRunning}>Démarrer</Button>
        <Button onClick={stopTimer} disabled={!isRunning}>Arrêter</Button>
        <Button onClick={resetTimer}>Réinitialiser</Button>
      </div>
    </div>
  );
};

export default Chronometre;
