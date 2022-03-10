import React from 'react';

import Fish from './Fish';
import PlayButton from './PlayButton';
import ScoreBoard from './ScoreBoard';

const StartPage = () => {
    return <div className='start-page'>
        <div className="left-container">
            <Fish x={0} y={0} />
            <PlayButton />
        </div>
        <div className="right-container">
            <ScoreBoard score={0} />
        </div>
    </div>;
};

export default StartPage;

