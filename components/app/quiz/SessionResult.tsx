import { useState } from 'react'

const Score = () => {
    return (<>
        <div className="font-bold uppercase">
            Votre score
        </div>
        <div className="mt-8 text-success text-3xl font-display">
            <span className="text-6xl">10</span>/10
        </div>
        <div className="my-5 text-success text-4xl uppercase font-display">
            Gagné!
        </div>
    </>)
}
const Trophy = () => {
    return (<>
        <div className="font-bold uppercase">
            Trophée
        </div>
        <div className="mt-8 text-3xl font-display">
            <h5 className="text-5xl">Bravo!</h5>
            <span>
                vous avez gagné
            </span>
        </div>
        <div className="my-3 text-3xl font-display text-secondary">
            1 place de cinéma
        </div>
        <div className="mb-3">
            Condition blabla
        </div>
    </>)
}

const SessionResult = () => {
    const [steper, SetSteper] = useState(0)
    const onValidate = () => {
        if (steper === 0) {
            SetSteper(1);
        }
    }
    return (<>
        <footer className="fixed bottom-10 left-10 right-10 px-4 pb-4 bg-white rounded-xl text-blue-500 shadow-xl">
            <div className="inline-block bg-white w-24 h-24 mx-auto p-2 rounded-full -mt-12">
                <img className="w-24" src="/images/coupe.svg" alt="Coup" />
            </div>
            {
                steper === 0 ? (<Score></Score>) : (<Trophy></Trophy>)
            }
            <div className="text-3xl uppercase  text-center cursor-pointer">
                
		    </div>
            <div className="btn-app-footer uppercase cursor-pointer flex items-center text-white font-fat bg-green-700 rounded-xl" onClick={onValidate}>
                <span className="mx-auto">{steper === 0 ? 'Débloquer mon trophée' : 'Terminé'}</span>
            </div>
        </footer>
    </>)
}
export default SessionResult
