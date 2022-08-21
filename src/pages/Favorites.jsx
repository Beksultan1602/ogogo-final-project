import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Comments from '../components/Comments'
import { useAuth } from '../hooks/use-auth'
import { useGetFavoritesQuery, useDeleteFavoritesMutation } from '../redux/api/favoritesApi'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const Favorites = () => {
	const {isAuth, email} = useAuth()
	const navigate = useNavigate()
	const {data = [], isLoading} = useGetFavoritesQuery()
	const [deleteFavorite] = useDeleteFavoritesMutation()
	const handleDeleteFavorite = async (id) => {
		await deleteFavorite(id).unwrap()
	}
	return (
		<>
			{isAuth ? <div>
			<div className="container mx-auto">
				<div>
					<h1 className='text-3xl font-bold mb-6'>В избранном:</h1>
					<div className='grid mx-2 sm:mx-0 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6'>
						{data.map(item => (
							<div key={item.id} className='relative'>
								<Link to={`/movie-info/${item.movieId}`} 
									key={item.id} 
									className='mb-2 relative'
									>
									<img 
									className='rounded-lg cursor-pointer hover:opacity-40 transition mb-2' 
									src={API_IMG + item.backdrop_path} alt="" 
									/>
									<p className='text-md font-semibold'>{item.title}</p>
								</Link>
								<button className=' absolute top-0 right-0 bg-purple-700/[0.6] px-4 py-2 rounded-b-lg hover:bg-purple-700 hover:border' onClick={() => handleDeleteFavorite(item.id)}>Удалить</button>
							</div>	
						))}
						
					</div>
						{/* <Comments /> */}
				</div>
			</div>
		</div> : navigate('/')}
		</>
	)
}

export default Favorites