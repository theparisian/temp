import { browser } from 'process';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import authService from '../authService';
import { setToken } from './userSlice';
import { UserState } from './userState';
const selectPseudo = createSelector(
    (state: {user: UserState}) => state.user,
    user => user.pseudo
)
const MainMenu = ({setMenu}: { setMenu: Dispatch<SetStateAction<string>>}) => {
    const pseduo = useSelector(selectPseudo)
    const dispatch = useDispatch()
    const logoutCallback = useCallback(async () => {
        const result = await authService.logout()
        if (result.ok) {
            dispatch(setToken(null))
        }
    }, [dispatch])
    return (
        <div className="h-3/5screen">
            <h1 className="uppercase text-xl font-bold">Bienvenue !</h1>
            <h1 className="uppercase text-xl">{pseduo}</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="p-2 my-2 border-2 border-gray-300 rounded-3xl w-64 shadow text-secondary cursor-pointer" onClick={() => setMenu('Trophies')}>Mes trophées</div>
                <div className="p-2 my-2 border-2 border-gray-300 rounded-3xl w-64 shadow cursor-pointer">Modifier mes infos</div>
                <div className="p-2 my-2 border-2 border-gray-300 rounded-3xl w-64 shadow cursor-pointer">Conditions générales</div>
            </div>
            <button className="block w-full uppercase py-4 mt-2 text-white bg-danger uppercase cursor-pointer absolute bottom-0" onClick={logoutCallback}>
                Se déconnecter
            </button>
        </div>)
};
export default MainMenu
