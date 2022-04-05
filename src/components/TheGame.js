import React, { useRef, useEffect, useState } from 'react';
import Fish from './Fish';
import Pipes from './Pipes';
import { checkFishPipes, checkFishWalls } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '../redux/startSlice';
import { updateScore } from '../redux/scoreSlice';

const INITIAL_FISH_POS = -500;

const TheGame = () => {
    const fallSpeed = parseInt(useSelector(state => state.difficulty.fall));

    const dispatch = useDispatch();
    const [currScore, setCurrScore] = useState(0);

    //inital positions of the fish
    const [pos, setPos] = useState(INITIAL_FISH_POS);

  //change focus to game div to detect key events
    const focusDiv = useRef();

  // always running fish down fall function
    const fishDownFall = () => {
        const walls = checkFishWalls();
        const pp = checkFishPipes(currScore);

        //fish collided with wall or pipe
        if(walls || pp === 0) {
            dispatch(
                updateScore({
                    score: currScore,
                })
            );
            dispatch(
                startGame({
                    gameStarted: false,
                })
            );
        }

        //fish crossed pipe
        if (!walls && pp === 1) {
            setCurrScore(currScore => currScore + 1);
        };
    };

    const handleSpaceBar = (event) =>{
    if (event.keyCode === 32) {
        setPos(pos => pos - 15);
        }
    };

    //initiate fish downfall function on first render.
    useEffect(() => {
        if(focusDiv.current) focusDiv.current.focus();
        const fishDown = setInterval(() => {
            fishDownFall();
            setPos(pos => pos + 15);
        }, fallSpeed); //timing here determines the fall speed

        return () => {
            clearInterval(fishDown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pos]);

    return (
    <div ref={focusDiv}  className='the-game' onKeyDown={handleSpaceBar}  tabIndex={0}>
        <div className="scrolling-image-container">
            <div className="scrolling-image"></div>
            <Pipes />
            <Fish top={pos} />
        </div>
    </div>
    );
};

export default TheGame;
