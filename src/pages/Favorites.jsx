import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { useGetFavoritesQuery, useDeleteFavoritesMutation } from '../redux/api/favoritesApi'
import { useSelector } from 'react-redux';
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const Favorites = () => {
	const uid = useSelector(state => state.user.id)
	const {isAuth, email} = useAuth()
	const navigate = useNavigate()
	const {data = [], isLoading} = useGetFavoritesQuery()
	const [deleteFavorite] = useDeleteFavoritesMutation()
	const handleDeleteFavorite = async (id) => {
		await deleteFavorite(id).unwrap()
	}
	console.log(email)
	console.log(data)
	console.log(uid)
	return (
		<>
			{isAuth ? <div className='mb-20'>
			<div className="container mx-auto">
				<div>
					<h1 className='text-3xl font-bold mb-6'>В избранном:</h1>
					<div className='grid mx-2 sm:mx-0 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6'>
						{data.map(item => (
							item.favId === uid ? (
								<div key={item.id} className='relative'>
									<Link to={`/movie-info/${item.movieId}`} 
										key={item.id} 
										className='mb-2 relative'
										>
										<img 
										className='rounded-lg cursor-pointer hover:opacity-40 transition mb-2' 
										src={item.favId === uid ? API_IMG + item.backdrop_path : null} alt="" 
										/>
										<p className='text-md font-semibold'>{item.favId === uid ? item.title : null}</p>
									</Link>
									<button className=' absolute top-0 right-0 bg-purple-700/[0.6] px-4 py-2 rounded-b-lg hover:bg-purple-700 hover:border' onClick={() => handleDeleteFavorite(item.id)}>Удалить</button>
								</div>	
							) : null
						))}
					</div>
				</div>
			</div>
		</div> : navigate('/')}
		</>
	)
}

export default Favorites