import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import PlayBtn from '../../../assets/images/play-video.png';
import BannerRazones from '../../../assets/images/razones-para-sospechar-banner.png';
import BannerNuevoContenido from '../../../assets/images//nuevo-contenido-banner.png';
import VideoBanner from '../../../assets/videos/video.mp4';

import './carrusel.css';

const Carrusel = () => {

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
            interval={5000}
            infiniteLoop={true}
            onChange={() => videoRef.current.pause()}
        >
            <div>
                <img src={BannerRazones} alt='razones para sospechar' />
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
                        Bienvenida
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