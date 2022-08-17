import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const commetsApi = createApi ({
	reducerPath: 'commentsApi',
	tagTypes: ['Comments'],
	baseQuery: fetchBaseQuery({baseUrl: 'https://62fd2ff2b9e38585cd4e558a.mockapi.io'}),
	endpoints: (build) => ({
		getComments: build.query({
			query: (limit = '') => `comments?page=1${limit && `&limit=${limit}`}`,
			providesTags: (result) => result 
				? [
					...result.map(({id}) => ({ type: 'Comments', id })),
					{ type: 'Comments', id: 'LIST' }
				]
				: [{ type: 'Comments', id: 'LIST' }]
		}),
		addComments: build.mutation({
			query: (body) => ({
				url: 'comments',
				method: 'POST',
				body
			}),
			invalidatesTags: [{type: 'Comments', id: 'LIST'}]
		}),
		deleteComment: build.mutation({
			query: (id) => ({
				url: `comments/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: [{type: 'Comments', id: 'LIST'}]
		})
	})
})

export const { useGetCommentsQuery, useAddCommentsMutation, useDeleteCommentMutation } = commetsApi