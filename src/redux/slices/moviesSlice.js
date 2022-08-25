import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	allMovies: [],
}	

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setAllMovies: (state, action) => {
			state.allMovies = action.payload
		}
	}
})


export const { setAllMovies } = moviesSlice.actions

export default moviesSlice.reducer