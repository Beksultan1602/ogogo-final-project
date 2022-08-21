import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoritesApi = createApi({
	reducerPath: 'favoritesApi',
	tagTypes: ['Favorites'],
	baseQuery: fetchBaseQuery({baseUrl: 'https://6300b4ca290d71b581e164db.mockapi.io/'}),
	endpoints: (build) => ({
		getFavorites: build.query({
			query: () => `favorites`,
			providesTags: (result) => result ? [
				...result.map(({id}) => ({type: 'Favorites', id})),
				{type: 'Favorites', id: 'LIST'},
			] : [{type: 'Favorites', id: 'LIST'}]
		}),
		addFavorites: build.mutation({
			query: (body) => ({
				url: 'favorites',
				method: 'POST',
				body
			}),
			invalidatesTags: [{type: 'Favorites', id: 'LIST'}]
		}),
		deleteFavorites: build.mutation({
			query: (id) => ({
				url: `favorites/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [{type: 'Favorites', id: 'LIST'}]
		})
	})
})

export const { useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation } = favoritesApi