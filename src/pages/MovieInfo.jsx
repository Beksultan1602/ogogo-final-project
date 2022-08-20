import React, { useEffect, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { Link, Navigate, useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import Button from '../components/ui/Button'
import { useAuth } from '../hooks/use-auth'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const YOU_PLAYER = 'https://www.youtube.com/watch?v='
const MovieInfo = () => {
	const { isAuth, email } = useAuth()
	const { id } = useParams()
	const [movieInfo, setMovieInfo] = useState([])
	const [actors, setActors] = useState([])
	const [recs, setRecs] = useState([])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=d8888bf513595a2de41979608397fb02&language=ru`
		)
			.then(res => res.json())
			.then(data => {
				setMovieInfo(data)
			})
	}, [id])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d8888bf513595a2de41979608397fb02&language=ru&credits`
		)
			.then(res => res.json())
			.then(data => {
				setActors(data.cast.slice(0, 5))
			})
	}, [id])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d8888bf513595a2de41979608397fb02&language=ru`
		)
			.then(res => res.json())
			.then(data => {
				setRecs(data.results.slice(0, 7))
				console.log(data.results)
			})
	}, [id])

	// console.log(allActors)
	return (
		<div>
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<img
						className='max-w-sm rounded-lg h-1/2'
						src={API_IMG + movieInfo.poster_path}
						alt=''
					/>
					<div className='flex flex-col gap-2 max-w-3xl'>
						<h1 className='text-4xl font-bold'>{movieInfo.title}</h1>
						<p className='text-gray-400'>{movieInfo.overview}</p>
						<p className='text-gray-400'>Статус: {movieInfo.status}</p>
						<div className='flex items-center'>
							<p className='text-gray-400 mr-2'>Рейтинг:</p>
							<p
								className={
									movieInfo.vote_average < 6
										? ' flex items-center justify-center font-black		 text-gray-50 h-16 w-16 bg-yellow-500 rounded-lg		 	'
										: ' flex items-center justify-center font-black		 text-gray-50 h-16 w-16 bg-lime-700 rounded-lg			'
								}
							>
								{movieInfo.vote_average}
							</p>
						</div>
						<p className='text-gray-400'>
							Дата выпуска: {movieInfo.release_date}
						</p>
						<p className='text-gray-400'>
							Длительность: {movieInfo.runtime}мин.
						</p>
						<div>
							<h2 className='text-gray-400 mb-2'>Актерский состав:</h2>
							<ul className='flex justify-between '>
								{actors.map(actor => (
									<li className='flex flex-col justify-center items-center font-bold '>
										<img
											className='w-24 rounded-lg'
											src={API_IMG + actor.profile_path}
											alt=''
										/>
										<p className='text-gray-400'>{actor.name}</p>
									</li>
								))}
							</ul>
						</div>
						<div className=' mt-16 '>
							<Button>
								В избранное
								<BsBookmark className='inline bg-inherit ml-4' />
							</Button>
						</div>
					</div>
				</div>
				<div className='mt-8'>
					<h2 className='text-2xl font-bold mb-4'>Рекомендации: </h2>
					<div className='flex justify-between '>
						{recs.map(rec => (
							<Link to={`/movie-info/${rec.id}`}>
								<img
									className='w-44 rounded-lg'
									src={API_IMG + rec.poster_path}
									alt=''
								/>
							</Link>
						))}
					</div>
				</div>
				<Comments />
			</div>
		</div>
	)
}

export default MovieInfo
