import { useEffect, useState } from "react"
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
const Form = ({title, handleClick}) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [formValid, setFormValid] = useState(false)
	const [passwordType, setPasswordType] = useState('password')
	const showPassword = () => {
		setPasswordType('text')
	}
	const emailHandler = (e) => {
		setEmail(e.target.value)
		const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Неверный электронный адрес')
		} else setEmailError('')
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if(e.target.value.length < 6) {
			setPasswordError('Пароль не может состоять из менее чем 6 символов')
		} else setPasswordError('')
	}
	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])
	return (
		<div className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto py-8">
			
			<div className="w-3/4 sm:w-1/2 flex justify-between items-center border-b border-slate-600 ">
				<AiOutlineMail />
				<input 
					onBlur={() => setEmailDirty(true)}
					className="p-4 w-full outline-none" 
					name='email' 
					type="email" 
					value={email} 
					onChange={e => emailHandler(e)} 
					placeholder='Электронный адрес'/>
			</div>
			{emailDirty ? <strong className="text-red-400">{emailError}</strong> : null}
			
			<div className="w-3/4 sm:w-1/2 flex justify-between items-center border-b border-slate-600 ">
				<RiLockPasswordFill />
				<input 
					onBlur={() => setPasswordDirty(true)}
					className="p-4 w-full outline-none" 
					name='password' 
					type={passwordType}
					value={password} 
					onChange={e => passwordHandler(e)} 
					placeholder='Пароль'/>
					<button onClick={() => showPassword('text')} className="whitespace-nowrap">Показать пароль</button>
			</div>
			{passwordDirty ? <strong className="text-red-400">{passwordError}</strong> : null}
			<button disabled={!formValid} className={formValid ? 'pink rounded-full mt-6 w-1/4 max-w-sm py-4 font-semibold' : 'rounded-full mt-6 w-1/4 max-wsm py-4 font-semibold bg-gray-500'} onClick={() => handleClick(email, password)}>{title}</button>
		</div>
	)
}

export default Form