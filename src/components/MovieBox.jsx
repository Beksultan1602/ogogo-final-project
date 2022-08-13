import React, { useState } from 'react'
import '../styles/main.css'

import { motion } from 'framer-motion'
import { BsFillBookmarkFill } from 'react-icons/bs'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieBox = ({ title, poster_path, vote_average }) => {
	const [activeBox, setActiveBox] = useState(false)
	return (
		<motion.div layout className='w-60 sm:w-56 relative'>
			<div
				onMouseEnter={() => setActiveBox(true)}
				onMouseLeave={() => setActiveBox(false)}
				className='mb-2 cursor-pointer hover:opacity-40  '
			>
				<img className='rounded-md' src={API_IMG + poster_path} alt='' />
				{activeBox ? (
					<div
						className='absolute top-2 left-2 	
			 p-2 bg-transparent	'
					>
						<p className='bg-inherit  text-xl 	 font-black	'>
							{vote_average.toFixed(1)}
						</p>

						<BsFillBookmarkFill className='absolute top-2 left-44 bg-inherit	' />
					</div>
				) : (
					''
				)}
			</div>
			<h1 className='text-sm font-semibold'>{title}</h1>
		</motion.div>
	)
}

export default MovieBox
