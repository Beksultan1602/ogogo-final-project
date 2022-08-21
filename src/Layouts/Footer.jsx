import React from 'react'
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
	return (
		<div className='flex items-center justify-between container mx-auto mt-10'>
			<p>© 2022 ООО «JS GROUP»</p>
			<div className='flex justify-end gap-7  '>
				<a href='https://www.youtube.com/ ' rel='noreferrer' target='_blank'>
					<BsYoutube className='h-8 w-8' />
				</a>
				<a href='https://www.facebook.com/ ' rel='noreferrer' target='_blank'>
					<BsFacebook className='h-8 w-8' />
				</a>
				<a href='https://web.telegram.org/ ' rel='noreferrer' target='_blank'>
					<BsTelegram className='h-8 w-8' />
				</a>
				<a href='https://twitter.com/ ' rel='noreferrer' target='_blank'>
					<BsTwitter className='h-8 w-8 mr-4' />
				</a>
			</div>
		</div>
	)
}

export default Footer
