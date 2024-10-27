import { useCallback, useState } from "react"
import CloseButton from "../../shared/components/button/CloseButton"
import AuthButtons from "./AuthButtons"
import Login from "./Login"
import Register from "./Register"

const Auth = () => {
    const [currentButton, setCurrentButton] = useState(undefined)
    const onClickAuthButtons = (bt: 'login' | 'register' | undefined) => setCurrentButton(bt)
    return (
        <>
            {currentButton !== undefined &&
                <div className={`absolute top-0 right-0 mt-4 pb-4 pr-4 flex ${open ? 'opacity-100' : 'opacity-0'}`}>
                    <CloseButton onClose={() => setCurrentButton(undefined)} />
                </div>}
            {currentButton === undefined && <AuthButtons onClick={onClickAuthButtons}></AuthButtons>}
            {currentButton === 'login' && <Login></Login>}
            {currentButton === 'register' && <Register onRegistered={() => onClickAuthButtons('login')}></Register>}
        </>
    )
}
export default Auth