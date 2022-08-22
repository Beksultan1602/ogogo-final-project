import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const Register = () => {
	return (
		<div className='mt-24 mb-44 lg:mb-0'>
			<h1 className='text-center text-2xl font-bold mb-6'>Регистрация</h1>
			<SignUp />
			<div className='flex items-center justify-center mt-6 gap-2'>
				<p>Уже есть аккаунт?</p>
				<Link to='/login' className='main-text-color'>Войдите</Link>
			</div>
		</div>
	)
}

export default Register