import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'

import { Link } from 'react-router-dom'

import Sort from '../components/Sort'
import Pagination from '../components/Pagination/Pagination'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

import { useAuth } from '../hooks/use-auth'
import Carousel from '../components/Carousel/Carousel'
import { setCurrentPage } from '../redux/slices/paginateSlice'
import Loader from '../components/ui/Loader'

const Home = () => {
	const sortType = useSelector(state => state.filters.sort.sortProperty)

	const { isAuth, email } = useAuth()
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filters.categoryId)
	const searchValue = useSelector(state => state.search.searchValue)

	const [loading, setLoading] = useState(true)
	const [filtered, setFiltered] = useState([])

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

		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=d8888bf513595a2de41979608397fb02&page=${currentPage}&language=ru&with_genres=${genre}&sort_by=${sortBy}.${order}`
		)
			.then(res => res.json())
			.then(data => setFiltered(data.results))
		setLoading(false)
	}, [sortType, categoryId, currentPage, searchValue])

	//////////////////
	// const searchedItems = searched.map(item => (
	// 	<Link key={item.id} to={`/movie-info/${item.id}`}>
	// 		<MovieBox key={item.id} {...item}/>
	// 	</Link>
	// ))
	///////////////////////
	const movieItems = filtered.map(movie => (
		<Link key={movie.id} to={`/movie-info/${movie.id}`}>
			<MovieBox key={movie.id} {...movie} />
		</Link>
	))
	return (
		<div>
			<Carousel filtered={filtered} />
			<div className='flex justify-center lg:justify-between items-center container mx-auto mb-6 flex-wrap lg:flex-nowrap gap-8 lg:gap-0'>
				<Categories
					setFiltered={setFiltered}
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
					{/* <div className='absolute top-0 left-0 bg-red-500/[0.6]'>
						<div className='w-3/4 mx-auto flex'>{searchedItems}</div>
					</div> */}
				</>
			)}
			<Pagination onChangePage={changeCurrentPage} />
		</div>
	)
}

export default Home
