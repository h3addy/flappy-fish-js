import { createSlice } from '@reduxjs/toolkit';

export const pipeSlice = createSlice({
	name: 'pipes',
	initialState: {
        allPipes: [],
    },
	reducers: {
		updateAllPipes: (state, action) => {
			state.allPipes = action.payload.allPipes;
		},
	},
});


export const { updateAllPipes } = pipeSlice.actions;

export default pipeSlice.reducer;
