import React from 'react';
import { useSelector } from 'react-redux';

const Pipes = () => {
    const allPipes = useSelector(state => state.pipes.allPipes);

    return (<div className='pipes-container'>
        {
            allPipes[0].map((p, i) => {
                return <div key={`pipe-group${i}`} className="pipe-group" >
                    <div className={`top-pipe the-pipes`} id={`top-pipe-${i}`} style={{height: p}}></div>
                    <div className={`bot-pipe the-pipes`} id={`bot-pipe-${i}`} style={{height: allPipes[1][i]}}></div>
                </div>;
            })
        }
    </div>);
};

export default Pipes;

