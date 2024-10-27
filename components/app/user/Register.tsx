import { useCallback, useState } from 'react'
import useForm from '../../shared/components/form/useForm'
import authService from '../authService'
import TextInput from '../../shared/components/form/TextInput'
import { RegisterRequest } from '../../../models/user/registerRequest'


const Register = ({ onRegistered } : { onRegistered: () => void } ) => {
    const [inputs, handleInputChange, handleSubmit] = useForm<RegisterRequest>({email: '', password: '', pseudo: ''})
    const [error, setError] = useState(null)
    const registerCallback = useCallback(async (data: RegisterRequest) => {
        const result = await authService.register(data)
        if (result.ok) {
            onRegistered()
        } else {
            setError(result.message)
        }
    }, [])
    return (
        <>
            <h1 className="uppercase text-4xl font-bold">Bienvenue !</h1>
            <form className="flex flex-col items-center px-12 pb-6" onSubmit={handleSubmit(registerCallback)}>
                <TextInput label="Email" name="email" type="email" onChange={handleInputChange} value={inputs.email} className="my-5" required></TextInput>
                <TextInput label="Mot de passe" name="password" type="password" onChange={handleInputChange} value={inputs.password} className="my-5" required minLength={8} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$"></TextInput>
                <TextInput label="Pseudo" name="pseudo" onChange={handleInputChange} value={inputs.pseudo} className="my-5" minLength={3}></TextInput>
                <div className="m-3 text-success">
					J'accepte les conditions générales
				</div>
                {error && <div className="text-danger">{error}</div>}
                <input className="text-3xl uppercase text-primary text-center cursor-pointer bg-white" type="submit" value="Valider" />
            </form>
        </>
    )
}
export default Register
