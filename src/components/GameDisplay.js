import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllPipes } from '../redux/pipeSlice';
import '../styles/game.css';
import { createPipes } from '../utils/util';
// import Instructions from './Instructions';
import StartPage from './StartPage';
import TheGame from './TheGame';

const GameDisplay = () => {
  const [allPipes, setAllPipes] = useState([]);
  const started = useSelector(state => state.start.gameStarted);
  const dispatch = useDispatch();

  useEffect(() => {setAllPipes(createPipes());}, []);
  useEffect(() => { 
      dispatch(
          updateAllPipes({
              allPipes: allPipes,
          })
      );
  }, [allPipes])

  const allPipes1 = useSelector(state => state.pipes.allPipes);
  console.log(allPipes1);
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
