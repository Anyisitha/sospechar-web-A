import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderNavDesktop from '../../components/content/header/HeaderNavDesktop';
import HeaderNavMobile from '../../components/content/header/HeaderNavMobile';
import UserDataPop from '../../components/content/popups/user/UserDataPop';
import SharedMedia from '../../components/content/shared/SharedMedia';
import Footer from '../../components/footer/Footer';

const SharedScreen = ({ location }) => {

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

            {/* SHARED CONTENT */}
            <SharedMedia location={location} />

            {/* FOOTER */}
            <Footer location={location} />
        </div>
    );
}

export default SharedScreen;