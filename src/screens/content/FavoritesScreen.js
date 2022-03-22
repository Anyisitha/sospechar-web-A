import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../components/content/favorites/Favorites';
import HeaderNavDesktop from '../../components/content/header/HeaderNavDesktop';
import HeaderNavMobile from '../../components/content/header/HeaderNavMobile';
import UserDataPop from '../../components/content/popups/user/UserDataPop';
import Footer from '../../components/footer/Footer';

const FavoritesScreen = ({ location }) => {

    const [windowSize, setwindowSize] = useState('');
    const { userPop } = useSelector(state => state.ui);

    useEffect(() => {
        handleNavByWindowSize();
    }, []);

    const handleNavByWindowSize = () => {
        if(window.innerWidth < 1000) {
            setwindowSize('mobile');
        } else {
            setwindowSize('desktop');
        }
    };

    return (
        <div className='content_main-container animated fadeIn'>
            {/* PROFILE POP */}
            {
                userPop && 
                <UserDataPop />
            }

            {/* HEADER Y NAV */}
            {
                windowSize === 'mobile'
                ?
                <HeaderNavMobile location={location} />
                :
                <HeaderNavDesktop location={location} />
            }

            {/* FAVORITOS SECTION */}
            <Favorites />

            {/* FOOTER */}
            <Footer location={location} />
        </div>
    );
}

export default FavoritesScreen;