import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
}
export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			state.searchValue = action.payload
		},
		removeSearchValue: state => {
			state.searchValue = ''
		},
	},
})
export const { setSearchValue, removeSearchValue } = searchSlice.actions
export default searchSlice.reducer
