import React from 'react';
import { useSelector } from 'react-redux';

const ScoreBoard = () => {
    const score = useSelector(state => state.score.score);

    const getScoreMessage = () => {
        switch(true){ //this true over here is vvvvvvv important
            case score > 0 && score <= 10:
                return 'Get A Good Keyboard.🥴'
            case score > 10 && score <= 50:
                return 'Not Bad!😐';
            case score > 50 && score <= 100:
                return 'Good Job!🤗';
            case score > 100:
                return 'Get A Life!🤦‍♂️';
            case score === 0:
                return 'Sad Life!🤣';
            default:
                return 'Not Good!';
        }
    }

    return <div className='score-board'>
        <div className="score-header">
            <p>Your Score</p>
        </div>
        <div className="score-body">
            <p>{score}</p>
            <p>{getScoreMessage(score)}</p>
        </div>
    </div>;
};

export default ScoreBoard;

