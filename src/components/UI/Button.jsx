import React from 'react'

const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className=' text-sm font-semibold	leading-4 rounded-lg py-2 px-4 pink h-10 w-40 '
		>
			{children}
		</button>
	)
}

export default Button
