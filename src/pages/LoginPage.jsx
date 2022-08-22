import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const AuthPage = () => {
	return (
		<div className='mt-24 mb-44 lg:mb-0'>
			<h1 className='text-center text-2xl font-bold mb-6'>Авторизация</h1>
			<Login />
			<div className='flex items-center justify-center mt-6 gap-2'>
				<p>Нет аккаунта?</p>
				<Link to='/register' className='main-text-color'>Зарегистрируйтесь!</Link>
			</div>
		</div>
	)
}

export default AuthPage