import { useCallback, useState } from 'react'
import useForm from '../../shared/components/form/useForm'
import authService from '../authService'
import TextInput from '../../shared/components/form/TextInput'
import { useDispatch } from 'react-redux'
import { setToken } from './userSlice'

interface ILoginForm {
    email: string
    password: string
}

const Login = () => {
	const [inputs, handleInputChange, handleSubmit] = useForm<ILoginForm>({email: '', password: ''})
	const [error, setError] = useState(null)
	const dispatch = useDispatch()
	const loggedInCallback = useCallback(async (data: ILoginForm) => {
		const result = await authService.login({userName: data.email, password: data.password})
        if (result.ok) {
			const tokenResult = await authService.refreshToken()
			if (tokenResult.ok) {
				dispatch(setToken(tokenResult.data))
			} else {
				setError(tokenResult.message)
			}
        } else {
            setError(result.message)
        }
	}, [dispatch])
    return (
        <>
            <h1 className="uppercase text-4xl font-bold">Bienvenue !</h1>
            <form className="flex flex-col items-center px-12 pb-6" onSubmit={handleSubmit(loggedInCallback)}>
				<TextInput label="Email" name="email" type="email" onChange={handleInputChange} value={inputs.email} className="my-5" required={true}></TextInput>
				<TextInput label="Mot de passe" name="password" type="password" onChange={handleInputChange} value={inputs.password} className="my-5" required={true}></TextInput>
				{error && <div className="text-danger">{error}</div>}
				<input className="text-3xl uppercase text-primary text-center cursor-pointer bg-white" type="submit" value="se connecter" />
			</form>
        </>
    )
}
export default Login
