import { useState } from "react"
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
const Form = ({title, handleClick}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto py-8">
			<div className="w-1/2 flex justify-between items-center border-b border-slate-600 ">
				<AiOutlineMail />
				<input className="p-4 w-full outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Электронный адрес'/>
			</div>
			<div className="w-1/2 flex justify-between items-center border-b border-slate-600 ">
				<RiLockPasswordFill />
				<input className="p-4 w-full outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль'/>
			</div>
			<button className="pink rounded-full mt-6 w-1/4 max-w-sm py-4 font-semibold" onClick={() => handleClick(email, password)}>{title}</button>
		</div>
	)
}

export default Form