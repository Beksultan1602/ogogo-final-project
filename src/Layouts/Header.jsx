import React, { useState } from 'react'


import { Link } from 'react-router-dom'
import Search from '../components/search/Search'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { BiExit, BiSearchAlt2 } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import SearchedMovies from '../pages/SearchedMovies'
const Header = () => {
	const dispatch = useDispatch()
	const { isAuth } = useAuth()
	const [openProfile, setOpenProfile] = useState(false)
	const [searchActive, setSearchActive] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)
	return (
		<div className='flex justify-between items-center pt-4 container mx-auto mb-20 '>
			<Link to='/' className='text-3xl main-text-color font-bold ml-2 sm:ml-0'>Ogogo <span>TV</span></Link>
			<div onClick={() => setSearchOpen(true)} className='hidden lg:flex items-center gap-6 border-2 cursor-pointer py-2 w-1/4 justify-between px-2'>				
				<h2>Найти фильм</h2>
				<BiSearchAlt2 className='w-8 h-8'/>
			</div>
			{ searchOpen ? 
				<div className=''>
					<SearchedMovies setSearchOpen={setSearchOpen}/>
					<button className='fixed z-30 text-4xl right-32 top-6' onClick={() => setSearchOpen(false)}>X</button>
				</div> 
				: null}
			
			{ isAuth 
				? 	
				<div className='items-center justify-center gap-6 hidden sm:flex'>
					<Link className='text-xl text-gray-400' to='/favorites'>Избранное</Link>
					<button className='text-xl text-gray-400' onClick={() => dispatch(removeUser())}>Выйти</button> 
				</div>
				: 
				<Link to='/login' className='px-2 sm:px-4 py-3 pink rounded-lg mr-2 sm:mr-0 whitespace-nowrap'>Войти или зарегистрироваться</Link> }
				{ isAuth 
				? 	
				<div className='block sm:hidden rounded-lg border-2 p-2 mr-2 relative'>
					<AiOutlineHome onClick={() => setOpenProfile(!openProfile)} className='w-6 h-6 cursor-pointer' />
					{ openProfile ? <div className='absolute right-0 top-12 flex flex-col items-end gap-2 mt-2 p-4 z-10 border rounded-lg'>
						<Link className='text-xl border-b-2' to='/favorites'>Избранное</Link>
						<button className='text-xl border-b-2 w-full' onClick={() => dispatch(removeUser())}>Выйти</button> 
					</div> : null }
				</div>
				: 
				null }
			{searchActive ? <div className='px-2 container mx-auto w-full flex justify-between items-center h-1/4 fixed main-bg right-0 left-0 z-10'>
				<SearchedMovies />
				<GiCancel onClick={() => setSearchActive(false)} className='fixed z-30 right-8 lg:right-32 cursor-pointer top-6 h-8 w-8 bg-transparent'/>
			</div> : ''}
			<div className='lg:hidden flex fixed bottom-0 py-4 w-full z-10 justify-evenly items-center left-0 bg-purple-900/[0.7]'>
				<Link className='bg-transparent' to='/'>
					<AiOutlineHome className='cursor-pointer h-10 w-10 bg-transparent'/>
				</Link>
				{isAuth ? (<Link className='bg-transparent' to='/favorites'><BsBookmark className='cursor-pointer h-10 w-10 bg-transparent'/></Link>) : <Link className='bg-transparent' to='/'><BsBookmark className='cursor-pointer h-10 w-10 bg-transparent'/></Link>}
				<BiSearchAlt2 onClick={() => setSearchActive(true)} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BiExit className='cursor-pointer h-10 w-10 bg-transparent' onClick={() => dispatch(removeUser())}/>
			</div>
		</div> 
	)
}

export default Header
