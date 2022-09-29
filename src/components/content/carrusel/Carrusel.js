import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import PlayBtn from '../../../assets/images/play-video.png';
import BannerRazones from '../../../assets/images/razones-para-sospechar-banner.png';
import BannerRazones1 from '../../../assets/images/test-prueba-banner.jpg';
import BannerRazones2 from '../../../assets/images/Banners-info.jpg';
import BannerNuevoContenido from '../../../assets/images//nuevo-contenido-banner.png';
import VideoBanner from '../../../assets/videos/video.mp4';

import './carrusel.css';

const Carrusel = () => {
    
    const history = () => window.open("https://app-test.sospecharnofalla.com/", "_blank")
    const videoRef = useRef();
    const btnRef = useRef();

    const handlePlayVideo = () => {
        btnRef.current.style.display = 'none';
        videoRef.current.play();
        videoRef.current.controls = true;
    }

    return (
        <Carousel
            className='carrusel'
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay={true}
            // interval={5000}
            infiniteLoop={true}
            onChange={() => videoRef.current.pause()}
            onClickItem={(e) => {
                if(e === 1) return history()
            }}
        >
            <div>
                <img className='papper-1'  src={BannerRazones} alt='razones para sospechar' />
            </div>
            <div>
                <img className='papper-1'  src={BannerRazones1} alt='razones para sospechar'  />
            </div>
            <div>
                <img className='papper-1'  src={BannerRazones2} alt='razones para sospechar'  />
            </div>
            <div>
                <video
                    width='80%'
                    ref={videoRef}
                >
                    <source src={VideoBanner} type="video/mp4" />
                </video>

                <p className="legend carrusel_legend_video">
                    <span className='carrusel_lengend-title'>VIDEO</span> <br />
                    <span className='carrusel_legend-text'>
                        Bienvenido: nuestros detectives te estaban esperando <br />para mostrarte las pistas que han recopilado 
                        hasta el momento.
                    </span>
                </p>

                <div
                    className="legend carrusel_play-video-btn"
                    onClick={handlePlayVideo}
                    ref={btnRef}
                >
                    <img
                        src={PlayBtn}
                        alt='play'
                    />
                </div>
            </div>
            
        </Carousel>
    );
}

export default Carrusel;