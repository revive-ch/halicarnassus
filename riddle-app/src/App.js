import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "A Tiny Tower Telling Time, Students On North See My Signs Shine";
  const answer = 'clock tower';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/clock.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
