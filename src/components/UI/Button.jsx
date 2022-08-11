import React from 'react'

const Button = ({ children, ...props }) => {
	return (
		<button {...props} className=' text-sm font-semibold	leading-4 rounded-lg py-2 px-4 pink '>
			{children}
		</button>
	)
}

export default Button
