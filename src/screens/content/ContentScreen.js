import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stopMedia } from '../../actions/ui';

import UserDataPop from '../../components/content/popups/user/UserDataPop';
import HeaderNavDesktop from '../../components/content/header/HeaderNavDesktop';
import HeaderNavMobile from '../../components/content/header/HeaderNavMobile';
import ContentMain from '../../components/content/main/ContentMain';
import Footer from '../../components/footer/Footer';

import $ from 'jquery';

import '../../App.css';

const ContentScreen = ({ location }) => {

    const dispatch = useDispatch();

    const [windowSize, setwindowSize] = useState('');
    const { userPop } = useSelector(state => state.ui);

    useEffect(() => {
        $('body').css('overflow', 'auto');
        handleNavByWindowSize();

        if(localStorage.getItem('hash')) {
            localStorage.removeItem('hash');
            dispatch(stopMedia());
        }
    }, [dispatch]);

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

            {/* MAIN CONTENT */}
            <ContentMain location={location} />

            {/* FOOTER */}
            <Footer location={location} />
        </div>
    );
};

export default ContentScreen;