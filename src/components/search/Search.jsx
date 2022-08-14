import React, { useContext } from 'react'
import { SearchContext } from '../../App'

const Search = () => {
	const { searchValue, setSearchValue } = useContext(SearchContext)
	return (
		<div>
			<input
				placeholder='Search'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
		</div>
	)
}

export default Search
