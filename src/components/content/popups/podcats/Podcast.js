import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { stopMedia } from '../../../../actions/ui';
import { fetchSetFavoriteItem } from '../../../../helpers/user';
import { hanldeCopyClipboard } from '../../../../helpers/clipboard';
import { fecthVerifyFavorite } from '../../../../helpers/media';
import { startRemovingFavorite } from '../../../../actions/media';
import { LOCAL_URL } from '../../../../helpers/global';

import CloseShare from '../../../../assets/images/close-share-icon.png';
import FacebookIcon from '../../../../assets/images/share-facebook-icon.png';
import WhatsappIcon from '../../../../assets/images/share-whatsapp-icon.png';
import LinkedinIcon from '../../../../assets/images/share-linkedin-icon.png';
import LinkIcon from '../../../../assets/images/share-link-icon.png';

import PlayBtn from '../../../../assets/images/btn-play-podcast-red.png';
import PauseBtn from '../../../../assets/images/btn-pause-podcast-red.png';
import VoiceTrail from '../../../../assets/images/voice-podcast-red.png';
import StarIcon from '../../../../assets/images/bigStar-icon.png';
import ShareIcon from '../../../../assets/images/share-icon-white.png';
import CloseIcon from '../../../../assets/images/close-icon.png';

import './podcats.css';

const Podcast = ({ location = null }) => {

    const dispacth = useDispatch();
    const history = useHistory();

    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);
    const { favorites } = useSelector(state => state.media);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [showShareBox, setshowShareBox] = useState(false);
    const [favoriteSaved, setFavoriteSaved] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [audioMinutes, setAudioMinutes] = useState(0);
    const [audioSeconds, setAudioSeconds] = useState(0);
    const [view, setView] = useState(1);

    const audioRef = useRef(null);
    const audioRef1 = useRef(null);

    useEffect(() => {
        verifyFavorite();
        getAudioDuration();
    }, []);

    const getAudioDuration = () => {
        setTimeout(() => {
            const duration = (audioRef.current.duration / 60).toString();
            const minutes = parseInt(duration.split('.')[0]);
            const seconds = parseInt(parseFloat('0.' + duration.split('.')[1]) * 60);

            setAudioMinutes(minutes);
            setAudioSeconds(seconds);
        }, 300);
    }

    const verifyFavorite = async () => {
        const res = await fecthVerifyFavorite(currentMediaPlaying.mediaId);

        if (res.error) {
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        handleAudioPlayindTime();
    };

    const handlePlay1 = () => {
        console.log(audioRef1.current.paused)
        setIsPlaying1(!isPlaying1);
        if (audioRef1.current.paused) {
            audioRef1.current.play();
        } else {
            audioRef1.current.pause();
        }

        handleAudioPlayindTime();
    };

    const handleAudioPlayindTime = () => {
        audioRef.current.addEventListener('timeupdate', function () {
            const actualTime = ((parseInt(this.duration) - parseInt(this.currentTime)) / 60).toString();

            const minutes = parseInt(actualTime.split('.')[0]);
            const seconds = parseInt(parseFloat('0.' + actualTime.split('.')[1]) * 60);

            setAudioMinutes(minutes);
            setAudioSeconds(seconds);
        });
    };

    const handleSetFavorite = async () => {
        if (!isFavorite && !favoriteSaved) {
            const res = await fetchSetFavoriteItem(currentMediaPlaying.mediaId);

            if (res == 'guardado') {
                setFavoriteSaved(true);
            }
        } else {
            dispacth(startRemovingFavorite(currentMediaPlaying.mediaId, favorites));
            setFavoriteSaved(false);
            setIsFavorite(false);
        }
    };

    const changeTime = (type) => {
        if (type === "add") {
            audioRef.current.currentTime = audioRef.current.currentTime + 10
        } else {
            audioRef.current.currentTime = audioRef.current.currentTime - 10
        }
    }

    const changeTime1 = (type) => {
        if (type === "add") {
            audioRef1.current.currentTime = audioRef1.current.currentTime + 10
        } else {
            audioRef1.current.currentTime = audioRef1.current.currentTime - 10
        }
    }
    console.log(currentMediaPlaying, "hola")
    return (
        view === 1 ? (
            <div
                className='podcastpop animated fadeInRight'
            >
                <audio
                    ref={audioRef}
                    src={currentMediaPlaying.filePath}
                >
                </audio>

                <div
                    className='podcastpop_bc'
                    style={{ backgroundImage: `url(${currentMediaPlaying.mediaBc})` }}
                >
                    <img
                        className='podcastpop_close-icon'
                        src={CloseIcon}
                        alt='close-podcast'
                        onClick={() => {
                            location?.pathname.includes('compartido') ? history.push('/contenido-para-profesionales') : dispacth(stopMedia())
                        }}
                    />

                    <div className='podcastpop_header'>
                        <div className='podcastpop_header-text animated fadeInRight'>
                            <h4>{currentMediaPlaying.mediaTitle}</h4>
                            <p>
                                <span>{currentMediaPlaying.mediaText1}</span>
                            </p>
                        </div>
                        <p className='podcastpop_time'>
                            {/* 0{audioMinutes}:{audioSeconds < 10 && '0'}{audioSeconds} */}
                        </p>
                    </div>

                    <div className='podcastpop_middle'>
                        <div
                            className='podcastpop_play-btn'

                        >
                            <img src={isPlaying ? require("../../../../assets/images/btn-pause-podcast-red.png") : require("../../../../assets/images/btn-play-podcast-red.png")} alt='reproducir podcast' onClick={handlePlay} />
                            <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center" }}>
                                <img src={require("../../../../assets/images/left-arrow.png")} width="50" style={{ marginRight: 20 }} onClick={() => changeTime("less")} />
                                <img src={require("../../../../assets/images/right-arrow.png")} width="50" onClick={() => changeTime("add")} />
                            </div>
                        </div>
                        <div className='podcastpop_voice-trail'>
                            <img src={VoiceTrail} alt='trazo de voz' />
                        </div>
                    </div>

                    <div className='podcastpop_footer'>
                        <div className='podcastpop_footer-text'>
                            <p className='animated fadeInRight'>
                                {currentMediaPlaying.mediaText2}
                            </p>
                            <p className='podcastpop_disclaimer'>
                                {
                                    currentMediaPlaying.info ? currentMediaPlaying.info : "La información contenida en este material no pretende reemplazar el consejo médico profesional, consulte siempre a su médico si tiene preguntas y/o preocupaciones acerca de su condición médica. Material educativo exclusivamente para pacientes/público general. Este material está sujeto a derechos de propiedad intelectual."
                                }
                                {
                                    currentMediaPlaying.code ? currentMediaPlaying.code : "PC-CO-102912"
                                }
                            </p>
                        </div>
                        <div className='podcastpop_icons'>
                            {
                                currentMediaPlaying.isSecond && (
                                    <img
                                        src={require("../../../../assets/images/right-arrow.png")}
                                        width="50"
                                        style={{
                                            position: "absolute",
                                            top: '45%'
                                        }}
                                        onClick={() => setView(2)}
                                    />
                                )
                            }


                            {/* <div
                            className={favoriteSaved ? 'podcastpop_favorite-btn animated rotateIn' : 'podcastpop_favorite-btn'}
                            style={{ opacity: isFavorite ? 1 : 0.5 }}
                            onClick={handleSetFavorite}
                        >
                            <img src={StarIcon} alt='añadir a favoritos' />
                        </div> */}

                            <div className='podcastpop_share-btn'>
                                {
                                    showShareBox &&
                                    <div className='podcastpop_share-icons-box'>
                                        <img
                                            className='close-share'
                                            src={CloseShare}
                                            alt='cerrar compartir'
                                            onClick={() => setshowShareBox(false)}
                                        />
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={FacebookIcon} alt='facebook icon' />
                                        </a>
                                        <a href={`https://api.whatsapp.com/send?text=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={WhatsappIcon} alt='whatsapp icon' />
                                        </a>
                                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={LinkedinIcon} alt='linkedin icon' />
                                        </a>
                                        <div onClick={() => hanldeCopyClipboard(`${LOCAL_URL}/${currentMediaPlaying.mediaId}`)} className='share-icon animated rotateIn'>
                                            <img src={LinkIcon} alt='link icon' />
                                        </div>
                                    </div>
                                }

                                <img
                                    className='open-share'
                                    src={ShareIcon} alt='compartir'
                                    onClick={() => setshowShareBox(!showShareBox)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div
                className='podcastpop animated fadeInRight'
            >
                <audio
                    ref={audioRef1}
                    src={require('../../../../assets/images/podcastaudio2.mp3')}
                >
                </audio>

                <div
                    className='podcastpop_bc'
                    style={{ backgroundImage: `url(${require('../../../../assets/images/podcast56.png')})` }}
                >
                    <img
                        className='podcastpop_close-icon'
                        src={CloseIcon}
                        alt='close-podcast'
                        onClick={() => {
                            location?.pathname.includes('compartido') ? history.push('/contenido-para-profesionales') : dispacth(stopMedia())
                        }}
                    />

                    <div className='podcastpop_header'>
                        <div className='podcastpop_header-text animated fadeInRight'>
                            <h4>{currentMediaPlaying.mediaTitle}</h4>
                            <p>
                                <span>Testimonio 2: paciente diagnosticado de
                                    manera temprana con falla cardiaca.</span>
                            </p>
                        </div>
                        <p className='podcastpop_time'>
                            {/* 0{audioMinutes}:{audioSeconds < 10 && '0'}{audioSeconds} */}
                        </p>
                    </div>

                    <div className='podcastpop_middle'>
                        <div
                            className='podcastpop_play-btn'

                        >
                            <img src={isPlaying1 ? require("../../../../assets/images/btn-pause-podcast-red.png") : require("../../../../assets/images/btn-play-podcast-red.png")} alt='reproducir podcast' onClick={handlePlay1} />
                            <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center" }}>
                                <img src={require("../../../../assets/images/left-arrow.png")} width="50" style={{ marginRight: 20 }} onClick={() => changeTime1("less")} />
                                <img src={require("../../../../assets/images/right-arrow.png")} width="50" onClick={() => changeTime1("add")} />
                            </div>
                        </div>
                        <div className='podcastpop_voice-trail'>
                            <img src={VoiceTrail} alt='trazo de voz' />
                        </div>
                    </div>

                    <div className='podcastpop_footer'>
                        <div className='podcastpop_footer-text'>
                            {/* <p className='animated fadeInRight'>
                                {currentMediaPlaying.mediaText2}
                            </p> */}
                            <p className='podcastpop_disclaimer' style={{ color: '#000' }}>
                                Serán testimonios de pacientes que fueron diagnosticados a tiempo gracias a que sospecharon de falla cardiaca.
                            </p>
                            <p className='podcastpop_disclaimer' style={{ color: '#000' }}>
                                La información contenida en este material no pretende reemplazar el consejo médico profesional, consulte siempre a su médico si tiene preguntas y/o preocupaciones acerca de su condición médica. Material educativo exclusivamente para pacientes/público general. Este material está sujeto a derechos de propiedad intelectual.
                                PC-CO-102912
                            </p>
                        </div>
                        <div className='podcastpop_icons'>
                            <img
                                src={require("../../../../assets/images/left-arrow.png")}
                                width="50"
                                style={{
                                    position: "absolute",
                                    top: '45%',
                                    left: '0%'
                                }}
                                onClick={() => setView(1)}
                            />

                            {/* <div
                            className={favoriteSaved ? 'podcastpop_favorite-btn animated rotateIn' : 'podcastpop_favorite-btn'}
                            style={{ opacity: isFavorite ? 1 : 0.5 }}
                            onClick={handleSetFavorite}
                        >
                            <img src={StarIcon} alt='añadir a favoritos' />
                        </div> */}

                            <div className='podcastpop_share-btn'>
                                {
                                    showShareBox &&
                                    <div className='podcastpop_share-icons-box'>
                                        <img
                                            className='close-share'
                                            src={CloseShare}
                                            alt='cerrar compartir'
                                            onClick={() => setshowShareBox(false)}
                                        />
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={FacebookIcon} alt='facebook icon' />
                                        </a>
                                        <a href={`https://api.whatsapp.com/send?text=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={WhatsappIcon} alt='whatsapp icon' />
                                        </a>
                                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${LOCAL_URL}/${currentMediaPlaying.mediaId}`} target='_blank' rel='noreferrer' className='share-icon animated rotateIn'>
                                            <img src={LinkedinIcon} alt='linkedin icon' />
                                        </a>
                                        <div onClick={() => hanldeCopyClipboard(`${LOCAL_URL}/${currentMediaPlaying.mediaId}`)} className='share-icon animated rotateIn'>
                                            <img src={LinkIcon} alt='link icon' />
                                        </div>
                                    </div>
                                }

                                <img
                                    className='open-share'
                                    src={ShareIcon} alt='compartir'
                                    onClick={() => setshowShareBox(!showShareBox)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Podcast;