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
		isAuth ? <div className='flex justify-between items-center pt-4 container mx-auto mb-20'>
			<Link to='/favorites'>Избранное</Link>
			<div className='flex items-center gap-6'>
				<Search />
				{/* <div onClick={() => setOpenProfile(!openProfile)} className='p-2 border-2 rounded-lg border-slate-500'>
					<BsFillPersonFill className='fill-slate-500' />
				</div>
				{openProfile ? 
					<div className='absolute z-10 border-2 p-4 top-12 right-0'>
						<button >Выйти</button>
					</div> : ''} */}
					<button onClick={() => dispatch(removeUser())}>Выйти</button>
			</div>
		</div> : ''
	)
}

export default Header
