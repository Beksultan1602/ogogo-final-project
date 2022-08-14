import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const AuthPage = () => {
	return (
		<div>
			<h1 className='text-center text-2xl font-bold mb-6'>Авторизация</h1>
			<Login />
			<div className='flex items-center justify-center'>
				<p>Нет аккаунта?</p>
				<Link to='/register'>Зарегистрируйтесь!</Link>
			</div>
		</div>
	)
}

export default AuthPage