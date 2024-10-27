const AuthButtons = ({ onClick }: { onClick: (bt: 'login' | 'register' | undefined) => void }) => {
    return (
        <>
            <button className="block w-full uppercase py-4" onClick={() => onClick ? onClick('login') : null}>
                se connecter
            </button>
            <button className="block w-full uppercase py-4 text-gray-600 bg-gray-200 rounded-xl font-fat" onClick={() => onClick ? onClick('register') : null}>
                créer un compte
            </button>
        </>)
};
export default AuthButtons
