import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'
import MovieBoxLoader from '../components/MovieBoxLoader'


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d8888bf513595a2de41979608397fb02&language=ru'
const Home = () => { 
	const [loading, setLoading] = useState(true) 
	const [movies, setMovies] = useState([])
  useEffect(() => {
		fetch(API_URL)
		.then(res => res.json())
		.then(data => {
      setMovies(data.results)
			setLoading(false)
    })
	}, [])
	return (
		<>
			
			<Categories />
			<div className='flex flex-wrap justify-center  gap-4'>
				{loading ? [...new Array (12)].map((_, index) => <MovieBoxLoader key={index}/>) : 
				movies.map(movie => <MovieBox {...movie} key={movie.id}/>
				)}
			</div>
		</>
	)
}

export default Home