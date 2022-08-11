import React, { useState } from 'react'
const Sort = ({ value, onChangeSort }) => {
	const [opened, setOpened] = useState(false)
	const list = [
    {
      name: "Популярности" ,
      sortProperty: 'popularity',

    },
    {
      name: 'популярности ⬇️',
      sortProperty: '-popularity',
    },
		{
      name: 'рейтингу ⬆️',
      sortProperty: 'vote_average',
    },
    {
      name: 'рейтингу ⬇️',
      sortProperty: '-vote_average',
    },
  ]
	const changeItemSort = i => {
    onChangeSort(i)
    setOpened(false)
  }
	return (
		<div onClick={() => setOpened(!opened)} className='relative p-4 border-2 max-w-xs w-full cursor-pointer'>
      <div className=''>
        <b className='mr-2'>Сортировать по:</b>
        <span >{value.name}</span>
      </div>
      {opened && (
      <div className='absolute z-10 p-4 border-2 w-full left-0 top-14'>
        <ul className='flex flex-col gap-4'>
          {list.map(obj => (
            <li
              onClick={() => changeItemSort(obj)}
              key={obj.name}
              className={
                value.sortProperty === obj.sortProperty ? 'flex gap-4 items-center' : 'flex gap-4 items-center'
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