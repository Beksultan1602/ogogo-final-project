import { useCallback, useEffect, useRef, useState } from 'react'
import { BsBackspace, BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { debounce } from 'lodash'

import {
	setSearchValue,
	removeSearchValue,
} from '../../redux/slices/searchSlice'
const Search = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const inputRef = useRef()
	const updateSearchValue = useCallback(
		debounce(str => {
			dispatch(setSearchValue(str))
		}, 1000),
		[]
	)
	const changeInputValue = event => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}
	const removeSearch = () => {
		setValue('')
		dispatch(removeSearchValue())
		inputRef.current.focus()
	}
	return (
			<div className='w-full flex items-center mx-auto bg-gray-700 '>
				<BsSearch className='h-6 w-6 ml-2 bg-gray-700' />
				<input
					className='px-4 outline-none p-2 w-full bg-gray-700 '
					ref={inputRef}
					placeholder='Поиск...'
					value={value}
					onChange={changeInputValue}
				/>
				{value && (
					<BsBackspace
						onClick={() => removeSearch()}
						className='cursor-pointer w-6 h-6 mr-2 bg-gray-700'
					/>
				)}
			</div>

	)
}

export default Search
