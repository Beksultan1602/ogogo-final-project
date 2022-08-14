import React, { useContext, useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'

import Header from '../layouts/Header'

import { motion } from 'framer-motion'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'
import { SearchContext } from '../App'
const Home = () => {
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filters.categoryId)
	const { searchValue } = useContext(SearchContext)

	const [loading, setLoading] = useState(true)
	const [filtered, setFiltered] = useState([])
	// const [activeGenre, setActiveGenre] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)

	const [sortType, setSortType] = useState({
		name: 'Популярности ',
		sortProperty: 'popularity',
	})

	const changeCategory = i => {
		dispatch(setCategoryId(i))
	}

	useEffect(() => {
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sortProperty.replace('-', '')
		const genre = categoryId > 0 ? `${categoryId}` : ''
		// const search = searchValue ? `&search=${searchValue}` : ''

		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=d8888bf513595a2de41979608397fb02&page=${currentPage}&limit=10&language=ru&search&with_genres=${genre}&${sortBy}.gte=2.0&${sortBy}.lte=8.0&sort_by=${sortBy}.${order}`
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
		.map(movie => <MovieBox key={movie.id} {...movie} />)
	return (
		<div>
			<Header />
			<div className='flex justify-between items-center container mx-auto'>
				<Categories
					setFiltered={setFiltered}
					activeGenre={categoryId}
					setActiveGenre={changeCategory}
				/>
				<Sort value={sortType} onChangeSort={i => setSortType(i)} />
			</div>
			<motion.div
				layout
				className='flex px-4 gap-6 container mx-auto flex-wrap items-start justify-center'
			>
				{movieItems}

				{/* {filtered.map(movie => (
					<MovieBox {...movie} key={movie.id} />
				))} */}
			</motion.div>
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	)
}

export default Home
