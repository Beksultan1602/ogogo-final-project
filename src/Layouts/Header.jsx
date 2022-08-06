import React, { useState } from 'react'
import Button from '../components/ui/Button'

const Header = () => {
	const [headerItem, setHeaderItem] = useState([
		'Мой ivi',
		'Что нового',
		'Фильмы',
		'Сериалы',
		'Мультфильмы',
		'Тв-каналы',
	])

	return (
		<div className='flex justify-between items-center pt-4'>
			<ul className='flex gap-4'>
				{headerItem.map(category => (
					<li
						className='font-semibold text-gray-500 hover:text-white transition cursor-pointer'
						key={category}
						onClick={() => category}
					>
						{category}
					</li>
				))}
			</ul>
			<div>
				<Button>Войти или зарегистрироваться</Button>
			</div>
		</div>
	)
}

export default Header
