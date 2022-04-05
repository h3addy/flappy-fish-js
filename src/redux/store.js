import { configureStore } from '@reduxjs/toolkit';
import startReducer from './startSlice';
import scoreReducer from './scoreSlice';
import pipesReducer from './pipeSlice';
import difficultyReducer from './difficultySlice';

export default configureStore({
	reducer: {
        start: startReducer,
        score: scoreReducer,
        pipes: pipesReducer,
        difficulty: difficultyReducer,
    },
});
