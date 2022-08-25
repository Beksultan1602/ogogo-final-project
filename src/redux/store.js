import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filterSlice'
import search from './slices/searchSlice'


import userReducer from './slices/userSlice'
import paginate from './slices/paginateSlice'
import movies from './slices/moviesSlice'

// api
import { commetsApi } from './api/commentsApi'
import { favoritesApi } from './api/favoritesApi'
export const store = configureStore({
	reducer: {
		filters,
		user: userReducer,
		paginate,
		search,
		movies,
		[commetsApi.reducerPath]: commetsApi.reducer,
		[favoritesApi.reducerPath]: favoritesApi.reducer
		
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commetsApi.middleware).concat(favoritesApi.middleware)
})
