import { useRef } from 'react'
import { BsBackspace, BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
	setSearchValue,
	removeSearchValue,
} from '../../redux/slices/searchSlice'
const Search = () => {
	const dispatch = useDispatch()
	const searchValue = useSelector(state => state.search.searchValue)
	const inputRef = useRef()
	const changeInputValue = event => {
		dispatch(setSearchValue(event.target.value))
	}
	const removeSearch = () => {
		dispatch(removeSearchValue())
		inputRef.current.focus()
	}
	return (
		<div className='flex items-center rounded  py-1 border border-slate-500 		 '>
			<BsSearch className='pl-1 h-4 w-4 ml-2' />
			<input
				className='w-full px-4 h-full outline-none p-2  		'
				ref={inputRef}
				placeholder='Поиск ...'
				value={searchValue}
				onChange={changeInputValue}
			/>
			{searchValue && (
				<BsBackspace
					onClick={() => removeSearch()}
					className='cursor-pointer mr-2'
				/>
			)}
		</div>
	)
}

export default Search
