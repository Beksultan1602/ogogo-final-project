import { useCallback, useRef, useState } from 'react'
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
		<div className='flex items-center rounded  py-1 border border-slate-500 		 '>
			<BsSearch className='pl-1 h-4 w-6 ml-2' />
			<input
				className='w-full px-4 h-full outline-none p-2  		'
				ref={inputRef}
				placeholder='Поиск ...'
				value={value}
				onChange={changeInputValue}
			/>
			{value && (
				<BsBackspace
					onClick={() => removeSearch()}
					className='cursor-pointer mr-2 w-6'
				/>
			)}
		</div>
	)
}

export default Search
