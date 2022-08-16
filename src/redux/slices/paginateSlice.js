import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	currentPage: 1
}	

export const pagianteSlice = createSlice({
	name: 'paginate',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		}
	}
})

export const { setCurrentPage } = pagianteSlice.actions

export default pagianteSlice.reducer