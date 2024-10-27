import { ChangeEvent, FormEvent, useState } from 'react'

function useForm<T extends object> (defaultValues?: T): [T, (e: {target: HTMLInputElement}) => void, (callback: (data: T) => void) => (e: FormEvent<HTMLFormElement>) => void] {
    const [inputs, setInputs] = useState(defaultValues || {} as T)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (callback: (data: T) => void) => {
        return (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            callback(inputs)
        }
    }
    return [inputs, handleInputChange, handleSubmit]
}
export default useForm