import React from 'react'

const Button = ({ children }) => {
	return (
		<button className=' text-sm font-semibold	leading-4 rounded-lg p-4 pink '>
			{children}
		</button>
	)
}

export default Button
