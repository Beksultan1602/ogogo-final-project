import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'
const Sort = () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filters.sort)
	const [opened, setOpened] = useState(false)
	const list = [
    {
      name: "Популярности ↑" ,
      sortProperty: 'popularity',

    },
    {
      name: 'Популярности ↓',
      sortProperty: '-popularity',
    },
		{
      name: 'рейтингу ↑',
      sortProperty: 'vote_average',
    },
    {
      name: 'рейтингу ↓',
      sortProperty: '-vote_average',
    },
  ]
	const changeItemSort = obj => {
    dispatch(setSort(obj))
    setOpened(false)
  }
	return (
		<div onClick={() => setOpened(!opened)} className='relative py-2 px-4 border-2 rounded-full max-w-xs w-full cursor-pointer '>
      <div className=''>
        <b className='mr-2'>Сортировать по:</b>
        <span>{sort.name}</span>
      </div>
      {opened && (
      <div className='absolute z-10 p-4 border-2 w-full rounded-xl left-0 top-10'>
        <ul className='flex flex-col gap-4'>
          {list.map(obj => (
            <li
              onClick={() => changeItemSort(obj)}
              key={obj.name}
              className={
                sort.sortProperty === obj.sortProperty ? 'flex gap-4 items-center' : 'flex gap-4 items-center'
              }
            >
              {obj.name} 
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
	)
}

export default Sort