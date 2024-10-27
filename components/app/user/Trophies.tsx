import { Dispatch, SetStateAction, useState } from 'react';
import ReturnButton from '../../shared/components/button/ReturnButton';
import TrophyDetail from './TrophyDetail';

const Trophies = ({ setMenu }: { setMenu: Dispatch<SetStateAction<string>> }) => {
    const [trophy, setTrophy] = useState(null)
    return trophy === null ? (
        <div className="min-h-3/4screen">
            <ReturnButton onClick={() => setMenu('MainMenu')}></ReturnButton>
            <h1 className="uppercase text-xl font-bold">Mes trophées</h1>
            <div className="flex flex-col items-center mb-6">
                <div className="p-2 my-2 border-2 border-gray-300 rounded-3xl shadow cursor-pointer flex items-center w-5/6 lg:w-3/6" onClick={() => setTrophy(undefined)}>
                    <div className="mx-3">
                        star
                    </div>
                    <div className="leading-none text-left">
                        <div className="font-bold">
                            1 Place offerte!
                        </div>
                        <div className="font-light">
                            Valable jusqu'au 30.03.2020
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (
            <div className="min-h-3/4screen">
                <ReturnButton onClick={() => setTrophy(null)}></ReturnButton>
                <TrophyDetail></TrophyDetail>
            </div>
        )
};
export default Trophies
