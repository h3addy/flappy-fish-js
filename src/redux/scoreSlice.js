import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
	name: 'score',
	initialState: {
        score: 0,
    },
	reducers: {
		updateScore: (state, action) => {
			state.score = action.payload.score;
		},
	},
});


export const { updateScore } = scoreSlice.actions;

export default scoreSlice.reducer;
