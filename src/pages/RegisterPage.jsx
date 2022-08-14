import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const Register = () => {
	return (
		<div>
			<h1>Register</h1>
			<SignUp />
			<p>Already have an accout? <Link to='/login'>Sign in</Link></p>
		</div>
	)
}

export default Register