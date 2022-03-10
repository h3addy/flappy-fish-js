import React from 'react';

const ScoreBoard = ({score}) => {
    return <div className='score-board'>
        <div className="score-header">
            <p>Your Score</p>
        </div>
        <div className="score-body">
            <p>{score}</p>
            <p>{score >= 50 ? 'Not Bad!' : 'Sad Life!'}</p>
        </div>
    </div>;
};

export default ScoreBoard;

