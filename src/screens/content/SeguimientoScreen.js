import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopMedia } from '../../actions/ui';
import Carrusel from '../../components/content/carrusel/Carrusel';
import Diagnostico from '../../components/content/diagnostico/Diagnostico';

import UserDataPop from '../../components/content/popups/user/UserDataPop';
import HeaderNavDesktop from '../../components/content/header/HeaderNavDesktop';
import HeaderNavMobile from '../../components/content/header/HeaderNavMobile';
import Footer from '../../components/footer/Footer';
import Seguimiento from '../../components/content/seguimiento/Seguimiento';

const SeguimientoScreen = ({ location }) => {

    const dispatch = useDispatch();

    const [windowSize, setwindowSize] = useState('');
    const { userPop } = useSelector(state => state.ui);

    useEffect(() => {
        handleNavByWindowSize();

        if(localStorage.getItem('hash')) {
            localStorage.removeItem('hash');
            dispatch(stopMedia());
        }
    }, [dispatch]);

    const handleNavByWindowSize = () => {
        if (window.innerWidth < 1000) {
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

            {/* MAIN CONTENT */}
            <Carrusel />
            <Seguimiento location={location} />

            {/* FOOTER */}
            <Footer location={location} />
        </div>
    );
}

export default SeguimientoScreen;