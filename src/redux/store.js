import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filterSlice'
import userReducer from './slices/userSlice'
export const store = configureStore({
  reducer: {
		filters,
		user: userReducer
	},
})