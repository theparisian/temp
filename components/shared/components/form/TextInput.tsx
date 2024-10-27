import { ChangeEvent } from 'react'
import styles from './TextInput.module.css'
type Props = {
    name: string
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    type?: string
    required?: boolean
    pattern?: string
    minLength?: number
    maxLength?: number
}

const TextInput = ({ name, label, value, onChange, className, type, required, pattern, minLength, maxLength }: Props) => {
    return (
        <div className={styles.customInput + ' relative w-full ' +  + (className || '')}>
            <input type={type || 'text'} className="border-0 bg-transparent w-full" name={name} value={value} onChange={onChange} required={required} minLength={minLength} maxLength={maxLength} pattern={pattern}/>
            <span className={value ? ('text-primary ' + styles.top) : 'text-opacity-50 text-primary'}>{label}</span>
        </div>)
}
export default TextInput
