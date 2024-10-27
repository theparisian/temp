const UserCard = () => {
    return (
        <div className="my-4 bg-gray-100 rounded-2xl p-3">
            <h4 className="uppercase text-sm px-2 py-0 font-fat">
                Mon Compte
                    </h4>
            <div className="text-blue-500 text-sm font-fat pt-3">
                Bienvenue User
            </div>
            <div className="text-blue-500 font-light text-sm">
                <button className="px-1 underline opacity-50">Parametres</button> <button className="px-1 underline opacity-50">Se deconnecter</button>
            </div>
        </div>
    )
}
export default UserCard

