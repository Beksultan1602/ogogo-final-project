import React from 'react'
import '../styles/main.css'

import { motion } from 'framer-motion'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieBox = ({ title, poster_path, vote_average }) => {
	return (
		<motion.div layout className='md:box-width relative'>
			<div className='mb-2 '>
				<img className='rounded-md' src={API_IMG + poster_path} alt='' />
			</div>
			<h1 className='text-sm font-semibold'>{title}</h1>
			<div className='absolute top-2 left-2 bg-black p-2 rounded-full border border-white'>
				<p className='bg-black'>{vote_average.toFixed(1)}</p>
			</div>
		</motion.div>
	)
}

export default MovieBox
