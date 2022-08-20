import React, { useState } from 'react'


import { Link, useNavigate } from 'react-router-dom'
import Search from '../components/search/Search'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { BiExit, BiSearchAlt2 } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isAuth } = useAuth()
	const [openProfile, setOpenProfile] = useState(false)
	const [searchActive, setSearchActive] = useState(false)

	return (
		<div className='flex justify-between items-center pt-4 container mx-auto mb-20 '>
			<Link to='/' className='text-3xl main-text-color font-bold ml-2 sm:ml-0'>Ogogo <span>TV</span></Link>
			<div className='hidden lg:flex items-center gap-6'>

				<Search />
				
			</div>
			{ isAuth 
				? 	
				<div className='items-center justify-center gap-6 hidden sm:flex'>
					<Link className='text-xl' to='/favorites'>Избранное</Link>
					<button className='text-xl' onClick={() => dispatch(removeUser())}>Выйти</button> 
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
			{searchActive ? <div className='transition px-2 container mx-auto w-full flex justify-between items-center h-1/4 fixed main-bg right-0 left-0 z-10'>
				<Search />
				<GiCancel onClick={() => setSearchActive(false)} className='mt-6 cursor-pointer h-8 w-8 bg-transparent'/>
			</div> : ''}
			<div className='lg:hidden flex fixed bottom-0 py-4 w-full z-10 justify-evenly items-center left-0 bg-purple-900/[0.7]'>
				<AiOutlineHome onClick={() => navigate('/')} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BsBookmark onClick={() => navigate('/favorites')} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BiSearchAlt2 onClick={() => setSearchActive(true)} className='cursor-pointer h-10 w-10 bg-transparent'/>
				<BiExit className='cursor-pointer h-10 w-10 bg-transparent' onClick={() => dispatch(removeUser())}/>
			</div>
		</div> 
	)
}

export default Header
