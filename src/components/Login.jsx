import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				navigate('/')
			})
			.catch((error) => {
				 swal("Oops! Something went wrong.", error.message);
			})
	}
	return (
		<Form 

			title='Войти'
			handleClick={handleLogin}
		/>
	)
}

export default Login