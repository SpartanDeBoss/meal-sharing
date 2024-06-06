import React, { useState, useEffect } from 'react';
import './JokesRotator.css';

const JokesRotator = () => {
  const jokes = [
    'Why don’t eggs tell jokes? They’d crack each other up.',
    'I’m on a seafood diet. I see food and I eat it.',
    'Why did the scarecrow win an award? Because he was outstanding in his field.',
    'What do you call fake spaghetti? An impasta.',
    'Why did the coffee file a police report? It got mugged.',
    // Add more jokes as needed
  ];

  const [currentJoke, setCurrentJoke] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke((prevJoke) => (prevJoke + 1) % jokes.length);
    }, 5000); // Change joke every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker">
        <h1>{jokes[currentJoke]}</h1>
      </div>
    </div>
  );
};

export default JokesRotator;
