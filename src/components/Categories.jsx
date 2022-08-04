import React, { useState } from 'react'

const Categories = () => {
	const categoryName  = ["По популярности", "По рейтингу"]
	const [activeCategory, setActiveCategory] = useState('По популярности')
	const changeActiveCategory = (category) => {
		setActiveCategory(category)
	}
	return (
		<div className='categories'>
			<ul className='flex gap-4'>
				{categoryName.map(category => (
					<li 
					key={category} 
					onClick={() => changeActiveCategory(category)} 
					className={activeCategory === category ? "bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-full cursor-pointer" : "p-4 rounded-full cursor-pointer"}>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories