import { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.scss'
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {
	const [error, setError] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()
	const {dispatch} = useContext(AuthContext)

	const loginHandler = (e) => {
		e.preventDefault()

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				dispatch({type: "LOGIN", payload: user})
				navigate("/")
				// ...
				setError("")
			})
			.catch((error) => {
				// const errorMessage = error.message;
				setError("Invalid Usename or Password.")
			});
	}

	return (
		<div className='login'>
			<form onSubmit={loginHandler}>
				<input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
				<input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
				<button type='submit'> Login </button>
				{error && <span>{error}</span>}
			</form>
		</div>
	)
}

export default Login