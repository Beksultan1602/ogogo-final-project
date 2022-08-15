import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import Form from '../components/Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const SignUp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				navigate('/')
			})
			
	}
	return (
		<Form 
			title='Регистрация'
			handleClick={handleRegister}
		/>
	)
}

export default SignUp