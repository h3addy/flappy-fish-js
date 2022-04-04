import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Fish from './Fish';
import PlayButton from './PlayButton';
import ScoreBoard from './ScoreBoard';

import { updateAllPipes } from '../redux/pipeSlice';
import { createPipes } from '../utils/util';

const StartPage = () => {
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
  
  return <div className='start-page'>
    <div className="left-container">
        <Fish />
        <PlayButton />
    </div>
    <div className="right-container">
        <ScoreBoard />
    </div>
  </div>;
};

export default StartPage;

