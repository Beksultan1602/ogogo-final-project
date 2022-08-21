import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'
import Form from '../components/Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import swal from 'sweetalert';
const SignUp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
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
			title='Регистрация'
			handleClick={handleRegister}
		/>
	)
}

export default SignUp