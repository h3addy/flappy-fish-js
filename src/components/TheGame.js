import React, { useRef, useEffect, useState } from 'react';
import Fish from './Fish';
import Pipes from './Pipes';
import { checkFishBoundaries } from '../utils/util';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/startSlice';

const TheGame = () => {
    const dispatch = useDispatch();

    //inital positions of the fish
    const [pos, setPos] = useState({
        x: 150,
        y: 110,
    });

    //change focus to game div to detect key events
    const focusDiv = useRef();

    // always running fish down fall function
    const fishDownFall = () => {
        const attr = document.querySelector('#the-fish').getAttribute('transform');
        const xy = attr.replace('translate(', '').replace(')', '').split(',');
        if(checkFishBoundaries()) {
            dispatch(
                startGame({
                    gameStarted: false,
                })
            );
        };
        setPos({x: pos.x, y: parseInt(xy[1]) + 26});
    };

    const handleSpaceBar = (event) =>{
		if (event.keyCode === 32) {
            const attr = document.querySelector('#the-fish').getAttribute('transform');
            const xy = attr.replace('translate(', '').replace(')', '').split(',');
            const newY = parseInt(xy[1]) - 20;
            if(checkFishBoundaries()) {
                dispatch(
                    startGame({
                        gameStarted: false,
                    })
                );
            };
            setPos({x: pos.x, y: newY });
        }
    };

    //initiate fish downfall function on first render.
    useEffect(() => {
        if(focusDiv.current) focusDiv.current.focus();
        const fishDown = setInterval(() => {
            fishDownFall();
        }, 250); //timing here determines the fall speed

        return () => {
            clearInterval(fishDown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focusDiv]);

    return (
    <div ref={focusDiv}  className='the-game' onKeyDown={handleSpaceBar}  tabIndex={0}>
        <div className="scrolling-image-container">
            <div className="scrolling-image"></div>
            <Pipes />
            <Fish x={pos.x} y={pos.y} />
        </div>
    </div>
    );
};

export default TheGame;
