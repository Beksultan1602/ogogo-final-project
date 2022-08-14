import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
export const SearchContext = createContext()

function App() {
	const [searchValue, setSearchValue] = useState('')

	return (
		<SearchContext.Provider value={{ searchValue, setSearchValue }}>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</SearchContext.Provider>
	)
}

export default App
