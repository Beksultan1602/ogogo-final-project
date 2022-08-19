import React, { useState } from 'react'
import Button from '../components/ui/Button'
import { BsFillPersonFill } from 'react-icons/bs'


import { Link, useNavigate } from 'react-router-dom'
import Search from '../components/search/Search'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { BiExit, BiSearchAlt2 } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isAuth } = useAuth()
	const [openProfile, setOpenProfile] = useState(false)
	const [searchActive, setSearchActive] = useState(false)
	return (
		<div className='flex justify-between items-center pt-4 container mx-auto mb-20'>
			<Link to='/' className='text-3xl main-text-color font-bold'>Ogogo <span>TV</span></Link>
			<div className='hidden md:flex items-center gap-6'>
				<Link to='/favorites'>Избранное</Link>

				<Search />
				{ isAuth 
				? 	
				<button onClick={() => dispatch(removeUser())}>Выйти</button> 
				: 
				<Link to='/login' className='px-4 py-3 pink rounded-lg'>Войти или зарегистрироваться</Link> }
			</div>
			{searchActive ? <div className='w-full h-screen'>
				<Search />
			</div> : ''}
			<div className='md:hidden flex fixed bottom-0 py-4 w-full z-10 justify-evenly items-center left-0 bg-purple-900/[0.7]'>
				<AiOutlineHome onClick={() => navigate('/')} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BsBookmark className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BiSearchAlt2 onClick={() => setSearchActive(true)} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BiExit className='cursor-pointer h-10 w-10 bg-transparent' onClick={() => dispatch(removeUser())}/>
			</div>
		</div> 
	)
}

export default Header
