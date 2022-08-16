import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filterSlice'
import search from './slices/searchSlice'

import userReducer from './slices/userSlice'
import paginate from './slices/paginateSlice'
export const store = configureStore({
	reducer: {
		filters,
		user: userReducer,
<<<<<<< HEAD
		paginate
=======
		search,
>>>>>>> 232a066d8ec1892c1b2e5181268e758769a41af0
	},
})
