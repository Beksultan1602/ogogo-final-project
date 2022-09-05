import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'

import { Link } from 'react-router-dom'

import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'


import Carousel from '../components/Carousel/Carousel'
import { setCurrentPage } from '../redux/slices/paginateSlice'
import { setAllMovies } from '../redux/slices/moviesSlice'
import Loader from '../components/UI/Loader'

const Home = () => {



	const dispatch = useDispatch()
	const sortType = useSelector(state => state.filters.sort.sortProperty)
	const categoryId = useSelector(state => state.filters.categoryId)
	const searchValue = useSelector(state => state.search.searchValue)
	const allMovies = useSelector(state => state.movies.allMovies)
	const currentPage = useSelector(state => state.paginate.currentPage)
	const [loading, setLoading] = useState(true)
	// const [filtered, setFiltered] = useState([])

	const setMainMovies = (data) => {
		dispatch(setAllMovies(data))
	}
	const changeCurrentPage = i => {
		dispatch(setCurrentPage(i))
		window.scrollTo(0, 75)
	}
	const changeCategory = i => {
		dispatch(setCategoryId(i))
	}
	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}
	useEffect(() => {
		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		const genre = categoryId > 0 ? `${categoryId}` : ''

		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=d8888bf513595a2de41979608397fb02&page=${currentPage}&language=ru&with_genres=${genre}&sort_by=${sortBy}.${order}`
		)
			.then(res => res.json())
			.then(data => setMainMovies(data.results))
			
		setLoading(false)
	}, [sortType, categoryId, currentPage, searchValue])
	const movieItems = allMovies.map(movie => (
		<Link onClick={() => scrollToTop()} key={movie.id} to={`/movie-info/${movie.id}`}>
			<MovieBox key={movie.id} {...movie} />
		</Link>
	))
	
	return (
		<div>
			<Carousel filtered={allMovies} />
			<div className='flex justify-center lg:justify-between items-center container mx-auto mb-6 flex-wrap lg:flex-nowrap gap-8 lg:gap-0'>
				<Categories
					setFiltered={setMainMovies}
					activeGenre={categoryId}
					setActiveGenre={changeCategory}
				/>
				<Sort />
			</div>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-6 container mx-auto justify-center'>
						{movieItems}
					</div>
				</>
			)}
			<Pagination onChangePage={changeCurrentPage} />
		</div>
	)
}

export default Home
