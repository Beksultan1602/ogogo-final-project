import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../components/search/Search'


const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const SearchedMovies = ({setSearchOpen}) => {
	const [searchedMovies, setSearchedMovies] = useState([])
	const searchValue = useSelector(state => state.search.searchValue)
	const currentPage = useSelector(state => state.paginate.currentPage)
	
	useEffect(() => {
			async function fetchMovies(queryValue) {
			if (!queryValue) {
					return 
			}
			try {
				fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8888bf513595a2de41979608397fb02&language=ru&query=${searchValue}&page=${currentPage}&include_adult=false`)
				.then(res => res.json())
				.then(data => setSearchedMovies(data.results))
			} catch(error) {

			}	
		}
		fetchMovies(searchValue)
	}, [searchValue])
	return (
		<div className='fixed top-0 left-0 h-screen w-full bg-black/[0.9] z-20 overflow-scroll overflow-x-hidden'>
			<div className='mt-6 w-2/4 lg:w-1/4 mx-auto mb-4'>
				<h1 className='text-3xl font-bold absolute left-44 hidden lg:absolute'>Поиск</h1>
				<Search />
			</div>
			<div 
					initial='hidden'
					whileInView='visible'
					viewport={{ amount: 0.2 }} 
					className='w-3/4 bg-transparent flex flex-col mx-auto gap-4 '>
				{searchedMovies.map(searched => (
					<Link to={`/movie-info/${searched.id}`} onClick={() => setSearchOpen(false)} key={searched.id} className='flex gap-4 h-32 md:h-44 lg:h-56 p-6 bg-transparent'>
						<img  className='w-1/3' src={API_IMG + searched.backdrop_path} alt="" />
						<div className='bg-transparent flex flex-col gap-2 justify-start'>
							<h1 className='bg-transparent text-xl font-semibold'>{searched.title}</h1>
							<p className='bg-transparent h-auto text-overflow'>{searched.overview}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SearchedMovies