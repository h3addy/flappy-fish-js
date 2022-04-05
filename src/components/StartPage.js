import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Fish from './Fish';
import PlayButton from './PlayButton';
import ScoreBoard from './ScoreBoard';

import { updateAllPipes } from '../redux/pipeSlice';
import { createPipes } from '../utils/util';
import Difficulty from './Difficulty';
import Instructions from './Instructions';

const StartPage = () => {
  const [diff, setDiff] = useState(false);
  const [inst, setInst] = useState(false);
  const [allPipes, setAllPipes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {setAllPipes(createPipes());}, []);
  useEffect(() => { 
    dispatch(
        updateAllPipes({
            allPipes: allPipes,
        })
    );
  }, [allPipes]);
  
  const DifficultyButton = (text) => (
    <button className="diff-btn" onClick={() => setDiff(!diff)}>{text}</button>
  );

  const InstructionsButton = (text) => (
    <button className="inst-btn" onClick={() => setInst(!inst)}>{text}</button>
  );

  return <div className='start-page'>
    { 
      diff && <>
      {DifficultyButton("Home")}
      <Difficulty />
      </>
    }
    {
      inst && <>
      {InstructionsButton("Home")}
      <Instructions />
      </>
    }
    {
      (!diff && !inst) && <>
      {DifficultyButton("Difficulty")}
      {InstructionsButton("Instructions")}
      <div className="left-container">
          <Fish />
          <PlayButton />
      </div>
      <div className="right-container">
          <ScoreBoard />
      </div>
      </>
    } 
  </div>;
};

export default StartPage;

