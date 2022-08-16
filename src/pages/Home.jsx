import React, { useContext, useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'

import { Link, Navigate } from 'react-router-dom'

<<<<<<< HEAD

=======
import { motion } from 'framer-motion'
>>>>>>> 232a066d8ec1892c1b2e5181268e758769a41af0
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

import { SearchContext } from '../App'

import { useAuth } from '../hooks/use-auth'
import Carousel from '../components/Carousel/Carousel'
import { setCurrentPage } from '../redux/slices/paginateSlice'

const Home = () => {
<<<<<<< HEAD
	const sortType = useSelector(state => state.filters.sort.sortProperty)

=======
>>>>>>> 232a066d8ec1892c1b2e5181268e758769a41af0
	const { isAuth, email } = useAuth()
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filters.categoryId)
	const searchValue = useSelector(state => state.search.searchValue)

	const [loading, setLoading] = useState(true)
	const [filtered, setFiltered] = useState([])

	// const [currentPage, setCurrentPage] = useState(1)
	const currentPage = useSelector(state => state.paginate.currentPage)
	const changeCurrentPage = i => {
		dispatch(setCurrentPage(i))
		window.scrollTo(0, 75)
	}
	const changeCategory = i => {
		dispatch(setCategoryId(i))
	}

	useEffect(() => {
		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		const genre = categoryId > 0 ? `${categoryId}` : ''
		// const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=d8888bf513595a2de41979608397fb02&page=${currentPage}&limit=10&language=ru&with_genres=${genre}&${sortBy}.gte=2.0&${sortBy}.lte=8.0&sort_by=${sortBy}.${order}`
		)
			.then(res => res.json())
			.then(data => {
				setFiltered(data.results.slice(0, 10))
				// setLoading(false)
			})
	}, [sortType, categoryId, searchValue, currentPage])
	const movieItems = filtered
		.filter(item =>
			item.title
				.toLowerCase()
				.replace(/ /g, '')
				.includes(searchValue.toLowerCase().replace(/ /g, ''))
		)
		.map(movie => 
			<Link to={`/movie-info/${movie.id}`}>
				<MovieBox key={movie.id} {...movie} />
			</Link>
			)
	return isAuth ? (
		<div>
<<<<<<< HEAD
			<Carousel filtered={filtered}/>
			<div className='flex justify-center sm:justify-end lg:justify-between items-center container mx-auto mb-8 gap-6 flex-wrap lg:flex-nowrap'>
=======
			<Carousel filtered={filtered} />
			<div className='flex justify-between items-center container mx-auto'>
>>>>>>> 232a066d8ec1892c1b2e5181268e758769a41af0
				<Categories
					setFiltered={setFiltered}
					activeGenre={categoryId}
					setActiveGenre={changeCategory}
				/>
				<Sort  />
			</div>

			<div className='grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-6 container mx-auto justify-center'>
				{movieItems}
			</div>
			<Pagination onChangePage={changeCurrentPage} />
		</div>
	) : (
		<Navigate to='/login' />
	)
}

export default Home
