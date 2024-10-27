import { useState } from 'react';
import UserPreview from './UserPreview';
import MainMenu from './MainMenu';
import Trophies from './Trophies';
import TrophyDetail from './TrophyDetail';
import CloseButton from '../../shared/components/button/CloseButton';

const User = () => {
    const [menu, setMenu] = useState('UserPreview')
    return (
        <>
            {menu !== 'UserPreview' &&
                <div className={`absolute top-0 right-0 mt-4 pb-4 pr-4 flex ${open ? 'opacity-100' : 'opacity-0'}`}>
                    <CloseButton onClose={() => setMenu('UserPreview')} />
                </div>}
            { menu === 'UserPreview' && <UserPreview setMenu={setMenu}></UserPreview>}
            { menu === 'MainMenu' && <MainMenu setMenu={setMenu}></MainMenu>}
            { menu === 'Trophies' && <Trophies setMenu={setMenu}></Trophies>}
        </>)
};
export default User
