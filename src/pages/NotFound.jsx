import React from 'react'

const NotFound = () => {
	return (
		<div>
			<h1 className=' text-center text-gray-400 text-9xl font-black		 mt-32	'>
				404
			</h1>
			<img
				className=' w-72 h-72 m-auto'
				src='https://vkclub.su/_data/stickers/dota2/sticker_vk_dota2_012.png'
				alt='404'
			/>
			<p className='text-center text-gray-400 text-2xl font-semibold		 mt-10	'>
				Похоже, мы не можем найти нужную вам страницу
			</p>
		</div>
	)
}

export default NotFound
