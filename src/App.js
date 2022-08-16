import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Favorites from './pages/Favorites'
import Login from './pages/LoginPage'
import MovieInfo from './pages/MovieInfo'
import Register from './pages/RegisterPage'
import Home from './pages/Home'
export const SearchContext = createContext()

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie-info/:id' element={<MovieInfo />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
