import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { UserState } from './userState';

const selectPseudo = createSelector(
    (state: {user: UserState}) => state.user,
    user => user.pseudo
)
const UserPreview = ({setMenu}: { setMenu: Dispatch<SetStateAction<string>>}) => {
    const pseduo = useSelector(selectPseudo)
    return (
        <>
            <div className="w-full grid grid-cols-2 pb-1">
                <div className="col-span-1 flex flex-col items-end justify-center pr-5 border-gray-300 border-r-2">
                    <div className="text-lg">
                        Bienvenue
                    </div>
                    <div className="text-xl font-bold">
                        {pseduo}
                    </div>
                </div>
                <div className="col-span-1 flex items-center pl-5 text-secondary cursor-pointer" onClick={() => setMenu('Trophies')}>
                    <div className="text-4xl font-bold">2</div>
                    <div>
                        <div className="text-xl">
                            Trophées
                        </div>
                        <div className="text-lg">
                            Gagnés
                        </div>
                    </div>
                </div>

            </div>
            <button className="block w-full uppercase py-4 text-gray-600 bg-gray-200 uppercase" onClick={() => setMenu('MainMenu')}>
                Mon Compte
            </button>
        </>)
};
export default UserPreview