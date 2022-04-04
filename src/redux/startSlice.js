import { createSlice } from '@reduxjs/toolkit';

export const startSlice = createSlice({
	name: 'start',
	initialState: {
        gameStarted: false,
    },
	reducers: {
		startGame: (state, action) => {
			state.gameStarted = action.payload.gameStarted;
		},
	},
});


export const { startGame } = startSlice.actions;

export default startSlice.reducer;
