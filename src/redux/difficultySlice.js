import { createSlice } from '@reduxjs/toolkit';

export const difficultySlice = createSlice({
	name: 'difficulty',
	initialState: {
        fall: '250',
        gap: '155',
    },
	reducers: {
		updateFall: (state, action) => {
			state.fall = action.payload.fall;
		},
        updateGap: (state, action) => {
			state.gap = action.payload.gap;
		},
	},
});


export const { updateFall, updateGap } = difficultySlice.actions;

export default difficultySlice.reducer;