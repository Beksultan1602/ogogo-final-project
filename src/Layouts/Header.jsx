import React, { useState } from 'react'
import Button from '../components/ui/Button'
import { BsFillPersonFill } from 'react-icons/bs'


import { Link } from 'react-router-dom'
import Search from '../components/search/Search'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
const Header = () => {
	const dispatch = useDispatch()
	const { isAuth } = useAuth()
	const [openProfile, setOpenProfile] = useState(false)
	return (
		<div className='flex justify-between items-center pt-4 container mx-auto mb-20'>
			<Link to='/' className='text-3xl main-text-color font-bold'>Ogogo <span>TV</span></Link>
			<Link to='/favorites'>Избранное</Link>
			<div className='flex items-center gap-6'>
				<Search />
				{ isAuth 
				? 	
				<button onClick={() => dispatch(removeUser())}>Выйти</button> 
				: 
				<Link to='/login' className='px-4 py-3 pink rounded-lg'>Войти или зарегистрироваться</Link> }
			</div>
		</div> 
	)
}

export default Header
