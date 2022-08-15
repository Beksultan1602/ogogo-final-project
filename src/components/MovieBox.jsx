import React, { useState } from 'react'
import '../styles/main.css'

import { motion } from 'framer-motion'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieBox = ({ title, poster_path, vote_average }) => {

	const [activeBox, setActiveBox] = useState(false)
	const navigate = useNavigate()
	const navigateToMovieInfo = () => {
		navigate(`/movie-info/:id`)
	}

	return (
		<motion.div layout className='w-42 sm:w-60 relative'>
			<div				
				onClick={() => navigateToMovieInfo()}
				onMouseEnter={() => setActiveBox(true)}
				onMouseLeave={() => setActiveBox(false)}
				className='mb-2 cursor-pointer hover:opacity-40 transition'
			>
				<img className='rounded-md' src={API_IMG + poster_path} alt='' />
			</div>
			{activeBox ? (
					<div
						className='absolute top-2 left-2 p-2 bg-transparent	flex items-center '
					>
						<p className='bg-inherit text-xl font-black	'>
							{vote_average.toFixed(1)}
						</p>
						<BsFillBookmarkFill className='bg-inherit' />
					</div>
				) : (
					''
				)}
			<h1 className='text-sm font-semibold'>{title}</h1>
		</motion.div>
	)
}

export default MovieBox
