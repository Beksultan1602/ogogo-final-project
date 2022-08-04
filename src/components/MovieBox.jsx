import React from 'react'
import '../styles/main.css'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const MovieBox = ({ title, poster_path, vote_average }) => {
	return (
		<div className='box-width relative'>
			<div className='mb-2 '>
				<img className='rounded-md' src={API_IMG + poster_path} alt='' />
			</div>
			<h1 className='text-sm font-semibold'>{title}</h1>
			<div className='absolute top-2 left-2 bg-black p-2 rounded-full border border-white'>
				<p className='bg-black'>{vote_average.toFixed(1)}</p>
			</div>
		</div>
	)
}

export default MovieBox
