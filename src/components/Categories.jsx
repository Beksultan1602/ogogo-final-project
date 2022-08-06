import React, { useEffect, useState } from 'react'


const Categories = ({setActiveGenre, activeGenre, setFiltered, movies}) => {
	const categoryName  = ["Все фильмы", "Комедии", "Боевики", "Приключения", "Мультфильмы", "Сериалы", "Ужасы"]
	const allGenres = [0, 35, 28, 12, 16, 10770, 53]
	
	useEffect(() => {
		if(activeGenre === 0) {
			setFiltered(movies)
			return
		}
		const filtered = movies.filter((movie) => movie.genre_ids.includes(activeGenre))
		setFiltered(filtered)
	}, [activeGenre])
	return (
		<ul className='flex gap-4'>
			{categoryName.map((category, index) => (
				<button onClick={() => setActiveGenre(allGenres[index])}>{category}</button>
			))}
		</ul>
	)
}

export default Categories