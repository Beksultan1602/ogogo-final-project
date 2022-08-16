import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieInfo = () => {
	const {id} = useParams()
	const [movieInfo, setMovieInfo] = useState([])
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d8888bf513595a2de41979608397fb02&language=ru`)
		.then(res => res.json())
		.then(data => {
			setMovieInfo(data)
		})
	}, [id])
	return (
		<div>
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<img className='max-w-sm rounded-lg' src={API_IMG + movieInfo.poster_path} alt="" />
					<div className='flex flex-col gap-2 max-w-3xl'>
						<h1 className='text-4xl font-bold'>{movieInfo.title}</h1>
						<p className='text-gray-400'>{movieInfo.overview}</p>
						<p className='text-gray-400'>Бюджет: {movieInfo.budget}$</p>
						<p className='text-gray-400'>Статус: {movieInfo.status}</p>
						<div>
							<p className='text-gray-400'>Рейтинг: {movieInfo.vote_average}</p>
						</div>
						<p className='text-gray-400'>Дата выпуска: {movieInfo.release_date}</p>
						<p>Длительность: {movieInfo.runtime}мин.</p>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieInfo