import React, { useEffect, useState } from 'react'
import { BsBookmark } from 'react-icons/bs'
import { Link, Navigate, useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import Button from '../components/ui/Button'
import { useAuth } from '../hooks/use-auth'
import { motion } from 'framer-motion'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const YOU_PLAYER = 'https://www.youtube.com/watch?v='
const imageAnimation = {
	hidden: {
		y: 100,
		opacity: 0
	},
	visible: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 }
	})
}
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
			})
	}, [id])

	// console.log(allActors)
	return (
		<div>
			<div className='container sm:mx-auto px-2'>
				<div className='flex justify-between xl:gap-0 gap-6 flex-wrap lg:flex-nowrap '>
					<img
						className='max-w-sm rounded-lg h-1/2 hidden lg:block'
						src={API_IMG + movieInfo.poster_path}
						alt=''
					/>
					<img
						className='rounded-lg w-1/2 lg:hidden block'
						src={API_IMG + movieInfo.backdrop_path}
						alt=''
					/>
					<div className='flex flex-col gap-2 max-w-3xl'>
						<h1 className='text-4xl font-bold'>{movieInfo.title}</h1>
						<p className='text-gray-400'>{movieInfo.overview}</p>
						<p className='text-gray-400'>Статус: {movieInfo.status}</p>
						<div>
							<p className='text-gray-400'>Рейтинг: {movieInfo.vote_average}</p>
						</div>
						<p className='text-gray-400'>
							Дата выпуска: {movieInfo.release_date}
						</p>
						<p className='text-gray-400'>
							Длительность: {movieInfo.runtime}мин.
						</p>
						<div>
							<h2 className='text-gray-400 mb-2'>Лучшие актеры:</h2>
							<ul className='flex gap-4 items-start flex-wrap mx-auto'>
								{actors.map((actor, index) => (
									<li className='flex flex-col items-start w-32' key={index}>
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
						<button className='text-sm font-semibold rounded-lg py-2 px-4 pink max-w-sm '>
							Добавить в избранное
							<BsBookmark className='inline bg-inherit ml-4' />
						</button>
					</div>
				</div>
				<motion.div 
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2 }}				
					className='mt-8'>
					<motion.h2 custom={1} variants={imageAnimation} className='text-2xl font-bold mb-4'>Рекомендации: </motion.h2>
					<motion.div custom={2} variants={imageAnimation} className='flex justify-center sm:justify-start gap-4 flex-wrap xl:flex-nowrap'>
						{recs.map(rec => (
							<Link to={`/movie-info/${rec.id}`}>
								<img
									className='w-44 rounded-lg'
									src={API_IMG + rec.poster_path}
									alt=''
								/>
							</Link>
						))}
					</motion.div>
				</motion.div>
				<Comments />
			</div>
		</div>
	) 
}

export default MovieInfo
