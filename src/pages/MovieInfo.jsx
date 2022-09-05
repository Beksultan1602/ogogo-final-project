import React, { useEffect, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { Link,  useParams } from 'react-router-dom'
import Loader from '../components/UI/Loader'
import { useDeleteFavoritesMutation } from '../redux/api/favoritesApi'

import Comments from '../components/Comments'
import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/use-auth'
import { useAddFavoritesMutation, useGetFavoritesQuery } from '../redux/api/favoritesApi'
import { motion } from 'framer-motion'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}
const MovieInfo = () => {
	const allMovies = useSelector(state => state.movies.allMovies)

	const {data = [], isLoading} = useGetFavoritesQuery()
	const [deleteFavorite] = useDeleteFavoritesMutation()
	const handleDeleteFavorite = async (id) => {
		await deleteFavorite(id).unwrap()
	}

	const favId = useSelector(state => state.user.id)
	const [addFavorite, { isError }] = useAddFavoritesMutation()
	const handleAddFavorite = async () => {
		await addFavorite({
			title: movieInfo.title,
			backdrop_path: movieInfo.poster_path,
			movieId: movieInfo.id,
			favId: favId
		}).unwrap()
	}
	const { isAuth, email } = useAuth()
	const { id } = useParams()
	const [movieInfo, setMovieInfo] = useState([])
	const [actors, setActors] = useState([])
	const [recs, setRecs] = useState([])
	const [teaser, setTeaser] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=d8888bf513595a2de41979608397fb02&language=ru`
		)
			.then(res => res.json())
			.then(data => {
				setMovieInfo(data)
				setLoading(false)
			})
	}, [id])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d8888bf513595a2de41979608397fb02&language=ru&credits`
		)
			.then(res => res.json())
			.then(data => {
				setActors(data.cast.slice(0, 9))
			})
	}, [id])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d8888bf513595a2de41979608397fb02&language=ru`
		)
			.then(res => res.json())
			.then(data => {
				setRecs(data.results.slice(0, 9))
			})
	}, [id])
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d8888bf513595a2de41979608397fb02&language=en-US`
		)
			.then(res => res.json())
			.then(data => {
				setTeaser(data.results.slice(0, 2))
			})
	}, [id])

	return (
		<div>
			<div className='container sm:mx-auto px-2'>
				{loading ? <Loader /> : (
					<div className='flex justify-between xl:gap-0 gap-6 flex-wrap lg:flex-nowrap '>
					<img
						className='max-w-sm rounded-lg h-1/2 hidden lg:block'
						src={API_IMG + movieInfo.poster_path}
						alt=''
					/>
					<img
						className='rounded-lg w-full sm:w-1/2 lg:hidden block'
						src={API_IMG + movieInfo.backdrop_path}
						alt=''
					/>
					<div className='flex flex-col gap-2 max-w-3xl'>
						<div className='flex justify-between items-center sm:flex-nowrap flex-wrap gap-2 sm:gap-0'>
							<h1 className='text-4xl font-bold'>{movieInfo.title}</h1>
							{isAuth ? (
								<button
									onClick={handleAddFavorite}
									className='whitespace-nowrap text-sm font-semibold rounded-lg py-2 px-4 pink max-w-sm '
								>
									Добавить в избранное
									<BsBookmark className='inline bg-inherit ml-4' />
								</button>
							) : null}
							
						</div>
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
							<h1 className='text-gray-400'>Жанры:</h1>

							<div className='flex flex-wrap'>
								{movieInfo.genres &&
									movieInfo.genres.slice(0, 5).map((genre, i) => (
										<ul key={i}>
											<li
												className=' text-center p-2 w-40 font-semibold border border-slate-300 rounded-full my-2.5 mr-2.5 outline-none'
												key={i}
											>
												{genre.name}
											</li>
										</ul>
									))}
							</div>
						</div>
					</div>
				</div>
				)}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2 }}
					className=' mt-8'
				>
					<motion.h1
						custom={1}
						variants={textAnimation}
						className='text-2xl text-center sm:text-left font-bold mb-4'
					>
						Трейлеры:
					</motion.h1>
					<motion.div
						custom={2}
						variants={textAnimation}
						className='flex gap-8 items-center flex-wrap lg:flex-nowrap'
					>
						{teaser.map(teas => (
							<iframe
								key={teas.id}
								width='560'
								height='300'
								src={'https://www.youtube.com/embed/' + teas.key}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						))}
					</motion.div>
				</motion.div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2 }}
					className='mt-8'
				>
					<motion.h2
						custom={1}
						variants={textAnimation}
						className='text-2xl text-center sm:text-left font-bold mb-4'
					>
						Лучшие актеры:{' '}
					</motion.h2>
					<motion.ul
						custom={2}
						variants={textAnimation}
						className='flex justify-center sm:justify-start gap-4 flex-wrap xl:flex-nowrap'
					>
		
							{actors.map((actor, index) => (
								<li className='flex flex-col items-start' key={index}>
									<img
										className='rounded-lg w-44'
										src={API_IMG + actor.profile_path}
										alt=''
									/>
									<p className='text-gray-400'>{actor.name}</p>
								</li>
							))}
			
					</motion.ul>
				</motion.div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2 }}
					className='mt-8'
				>
					<motion.h2
						custom={1}
						variants={textAnimation}
						className='text-2xl text-center sm:text-left font-bold mb-4'
					>
						Рекомендации:{' '}
					</motion.h2>
					<motion.div
						custom={1}
						variants={textAnimation}
						className='flex justify-center sm:justify-start gap-4 flex-wrap xl:flex-nowrap'
					>
						{recs.map(rec => (
							<Link key={rec.id} to={`/movie-info/${rec.id}`}>
								<img
									className='w-44 rounded-lg'
									src={API_IMG + rec.poster_path}
									alt=''
								/>
							</Link>
						))}
					</motion.div>
				</motion.div>
				<Comments movieInfo={movieInfo}/> 
			</div>
		</div>
	)
}

export default MovieInfo
