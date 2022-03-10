import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/game.css';
// import Instructions from './Instructions';
import StartPage from './StartPage';
import TheGame from './TheGame';

const GameDisplay = () => {
  const started = useSelector(state => state.start.gameStarted);

  return <div className="game-display">
    <div className="game-board">
      { 
          started 
          ? <TheGame />
          : <StartPage />
      }  
    </div>
  </div>;
};

export default GameDisplay;
