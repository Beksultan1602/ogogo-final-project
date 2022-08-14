import { useState } from "react"
const Form = ({title, handleClick}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className="flex flex-col items-center justify-center gap-8 border-2 max-w-2xl mx-auto rounded-lg py-8">
			<input className="p-4 main-border rounded-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
			<input className="p-4 main-border rounded-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
			<button className="pink rounded-lg w-full max-w-sm py-4" onClick={() => handleClick(email, password)}>{title}</button>
		</div>
	)
}

export default Form