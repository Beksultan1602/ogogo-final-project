import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import MovieBox from '../components/MovieBox'


import Header from '../layouts/Header'

import {motion} from 'framer-motion'
import Sort from '../components/Sort'


const Home = () => {
	const [loading, setLoading] = useState(true)
	const [filtered, setFiltered] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)

	

	const [sortType, setSortType] = useState({
			name: 'Популярности ',
			sortProperty: 'popularity',
		})

	
	useEffect(() => {
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sortProperty.replace('-', '')
		const genre = activeGenre > 0 ? `${activeGenre}` : ''
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d8888bf513595a2de41979608397fb02&language=ru&with_genres=${genre}&${sortBy}.gte=2.0&${sortBy}.lte=8.0&sort_by=${sortBy}.${order}`)
			.then(res => res.json())
			.then(data => {
				setFiltered(data.results)
				setLoading(false)
			})
	}, [sortType, activeGenre])
	return (
		<div>
			<Header />
			<div className='flex justify-between items-center container mx-auto'>
				<Categories setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
				<Sort value={sortType} onChangeSort={i => setSortType(i)}/>
			</div>
			{/* <motion.div layout className='grid grid-cols-2 place-content-center px-4 md:grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 gap-6 container mx-auto'> */}
			<motion.div layout className='flex px-4 gap-6 container mx-auto flex-wrap items-start justify-center'>
				{loading
					? ''
					: filtered.map(movie => <MovieBox {...movie} key={movie.id} />)}
			</motion.div>
		</div>
	)
}

export default Home
