import { configureStore } from '@reduxjs/toolkit';
import startReducer from './startSlice';
import scoreReducer from './scoreSlice';
import pipesReducer from './pipeSlice';

export default configureStore({
	reducer: {
        start: startReducer,
        score: scoreReducer,
        pipes: pipesReducer,
    },
});
