import React from 'react'



const Categories = ({setActiveGenre, activeGenre}) => {
	const categoryName  = ["Все фильмы", "Комедии", "Боевики", "Приключения", "Мультфильмы", "Ужасы"]
	const allGenres = [0, 35, 28, 12, 16, 53]
	

	return (
		
		<ul className='flex gap-4 overflow-scroll sm:overflow-auto mx-4 sm:mx-0 max-w-2xl xl:max-w-full'>
			{categoryName.map((category, index) => (
				<button key={index} className={activeGenre === allGenres[index] ? 'text-sm font-semibold leading-4 rounded-full px-4 py-2 pink whitespace-nowrap' : 'px-4 py-2 hover:bg-pink-700 rounded-full whitespace-nowrap'} onClick={() => setActiveGenre(allGenres[index])}>{category}</button>
			))}
		</ul>
	)
}

export default Categories