import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { playingMedia, stopMedia } from '../../../../actions/ui';
import { fetchSetFavoriteItem } from '../../../../helpers/user';
import { hanldeCopyClipboard } from '../../../../helpers/clipboard';
import { fecthVerifyFavorite } from '../../../../helpers/media';
import { startRemovingFavorite } from '../../../../actions/media';
import { LOCAL_URL } from '../../../../helpers/global';

import Card from '../../cards/Card';

import CloseShare from '../../../../assets/images/close-share-icon.png';
import FacebookIcon from '../../../../assets/images/share-facebook-icon.png';
import WhatsappIcon from '../../../../assets/images/share-whatsapp-icon.png';
import LinkedinIcon from '../../../../assets/images/share-linkedin-icon.png';
import LinkIcon from '../../../../assets/images/share-link-icon.png';
import PlayPodcast from '../../../../assets/images/play-podcast-btn.png';
import VideoIcon from '../../../../assets/images/serie-icon.png';
import PlayBtn from '../../../../assets/images/play-video.png';
import StarIcon from '../../../../assets/images/bigStar-icon.png';
import ShareIcon from '../../../../assets/images/share-icon-white.png';
import CloseIcon from '../../../../assets/images/close-icon.png';
import videoDumi from '../../../../assets/videos/video.mp4'

import $ from 'jquery';

import './videopop.css';

const VideoPopUp = ({ setmediaIdPlaying = null, location = null }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);
    const { favorites } = useSelector(state => state.media);

    const [showShareBox, setshowShareBox] = useState(false);
    const [favoriteSaved, setFavoriteSaved] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const videoRef = useRef(null);
    const btnPlayRef = useRef(null);

    console.log("ppp", currentMediaPlaying)


    useEffect(() => {
        verifyFavorite();
    }, []);

    const verifyFavorite = async () => {
        const res = await fecthVerifyFavorite(currentMediaPlaying.mediaId);
        
        if(res.error) {
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
    }

    const handleDisplayMedia = (id, type, title, text1, text2, bc) => {
        setmediaIdPlaying(id);
        dispatch(playingMedia(id, title, text1, text2, type, bc));
    };

    const handleSetFavorite = async () => {
        if (!isFavorite && !favoriteSaved) {
            const res = await fetchSetFavoriteItem(currentMediaPlaying.mediaId);

            if (res == 'guardado') {
                setFavoriteSaved(true);
            }
        } else {
            dispatch(startRemovingFavorite(currentMediaPlaying.mediaId, favorites));
            setFavoriteSaved(false);
            setIsFavorite(false);
        }
    };

    const handleScroll = () => {
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $('#section-3').offset().top - 50
            }, 1000);
        }, 100);
    }

    const handlePlayVideo = () => {
        videoRef.current.play();
        videoRef.current.controls = true;
        btnPlayRef.current.style.display = 'none';
    };


    return (
        <div className='videopop'>

            <div className='videopop_close'>
                <img
                    src={CloseIcon}
                    alt='cerrar video'
                    onClick={() => {
                        location?.pathname.includes('compartido') ? history.push('/contenido-para-profesionales') : dispatch(stopMedia())
                    }}
                />
            </div>

            <div className='videopop_wrapper'>
                <div className='videopop_main-content'>
                    <div className='videopop_text'>
                        <h4>{currentMediaPlaying.mediaTitle}</h4>
                        <p>
                            {currentMediaPlaying.mediaText1}
                        </p>
                    </div>
                    <div className='videopop_video-wrapper'>
                        <div
                            className='videopop_play-icon'
                            ref={btnPlayRef}
                            onClick={handlePlayVideo}
                        >
                            <img
                                src={PlayBtn} alt='reproducir video'
                            />
                        </div>
                        <video ref={videoRef}>
                            <source src={currentMediaPlaying.filePath} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='videopop_btns-wrapper'>
                    {/* <div
                        className={favoriteSaved ? 'videopop_favorite-icon videopop_icon animated rotateIn' : 'videopop_favorite-icon videopop_icon'}
                        style={{opacity: isFavorite ? 1 : 0.5}}
                        onClick={handleSetFavorite}
                    >
                        <img src={StarIcon} alt='guardar en favoritos' />
                    </div> */}

                    {
                        showShareBox &&
                        <div className='videopop_share-icons-box'>
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

                    <div
                        className='videopop_share-icon videopop_icon'
                        onClick={() => setshowShareBox(!showShareBox)}
                    >
                        <img src={ShareIcon} alt='compratir video' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPopUp;