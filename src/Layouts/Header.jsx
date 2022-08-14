import React from 'react'
import Button from '../components/ui/Button'
import { BsFillPersonFill } from 'react-icons/bs'
import Search from '../components/search/Search'
const Header = () => {
	const headerItem = [
		'Мой ivi',
		'Что нового',
		'Фильмы',
		'Сериалы',
		'Мультфильмы',
		'Тв-каналы',
	]

	return (
		<div className='flex justify-between items-center pt-4 container mx-auto'>
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

			<Search />
			<div className='flex items-center gap-6'>
				<Button>Войти или зарегистрироваться</Button>
				<div className='p-2 border-2 rounded-lg border-slate-500'>
					<BsFillPersonFill className='fill-slate-500' />
				</div>
			</div>
		</div>
	)
}

export default Header
