import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'
import MovieBoxLoader from '../components/MovieBoxLoader'

import Header from '../layouts/Header'

const API_URL =
	'https://api.themoviedb.org/3/movie/popular?api_key=d8888bf513595a2de41979608397fb02&language=ru'
const Home = () => {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])
	const [filtered, setFiltered] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)
	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				setMovies(data.results)
				setFiltered(data.results)
				setLoading(false)
			})
	}, [])
	return (
		<>
			<Header />
			<Categories movies={movies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
			<div className='grid grid-cols-6'>
				{loading
					? [...new Array(12)].map((_, index) => <MovieBoxLoader key={index} />)
					: filtered.map(movie => <MovieBox {...movie} key={movie.id} />)}
			</div>
		</>
	)
}

export default Home
