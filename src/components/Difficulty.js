import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFall, updateGap } from '../redux/difficultySlice';

const Difficulty = () => {
    const fallSpeed = useSelector(state => state.difficulty.fall);
    const pipeGap = useSelector(state => state.difficulty.gap);

    const dispatch = useDispatch();

    const handleFallChange = (e) => {
        dispatch(
            updateFall({
                fall: e.currentTarget.value,
            })
        );
    };

    const handleGapChange = (e) => {
        dispatch(
            updateGap({
                gap: e.currentTarget.value,
            })
        );
    };

    return (
    <div className='difficulty-wrapper'>
        <div>
            <p>Fish Fall Speed:</p>
            <p>Pipe's Gap:</p>
        </div>
        <div>
            <div className='radio-wrapper fish-fall'>
                <input type="radio" id="fall-e" name="fish_fall" value="250" checked={fallSpeed === '250'} onChange={e => handleFallChange(e)} />
                <label htmlFor="fall-e">Easy</label>
                <input type="radio" id="fall-m" name="fish_fall" value="150" checked={fallSpeed === '150'} onChange={e => handleFallChange(e)} />
                <label htmlFor="fall-m">Medium</label>
                <input type="radio" id="fall-h" name="fish_fall" value="50" checked={fallSpeed === '50'} onChange={e => handleFallChange(e)} />
                <label htmlFor="fall-h">Hard</label>
            </div>
            
            <div className='radio-wrapper pipes-gap'>
                <input type="radio" id="gap-e" name="pipes_gap" value="155" checked={pipeGap === '155'} onChange={e => handleGapChange(e)} />
                <label htmlFor="gap-e">Easy</label>
                <input type="radio" id="gap-m" name="pipes_gap" value="135" checked={pipeGap === '135'} onChange={e => handleGapChange(e)} />
                <label htmlFor="gap-m">Medium</label>
                <input type="radio" id="gap-h" name="pipes_gap" value="115" checked={pipeGap === '115'} onChange={e => handleGapChange(e)} />
                <label htmlFor="gap-h">Hard</label>
            </div>
        </div>
    </div>
    )
}

export default Difficulty