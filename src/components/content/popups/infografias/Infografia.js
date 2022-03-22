import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { stopMedia } from '../../../../actions/ui';
import { fetchSetFavoriteItem } from '../../../../helpers/user';
import { fecthVerifyFavorite } from '../../../../helpers/media';
import { hanldeCopyClipboard } from '../../../../helpers/clipboard';
import { LOCAL_URL } from '../../../../helpers/global';
import { startRemovingFavorite } from '../../../../actions/media';
import Lightbox from 'react-awesome-lightbox';

import CloseShare from '../../../../assets/images/close-share-icon.png';
import FacebookIcon from '../../../../assets/images/share-facebook-icon.png';
import WhatsappIcon from '../../../../assets/images/share-whatsapp-icon.png';
import LinkedinIcon from '../../../../assets/images/share-linkedin-icon.png';
import LinkIcon from '../../../../assets/images/share-link-icon.png';
import StarIcon from '../../../../assets/images/bigStar-icon.png';
import ShareIcon from '../../../../assets/images/share-icon-white.png';
import DownloadIcon from '../../../../assets/images/download-icon.png';
import CloseIcon from '../../../../assets/images/close-icon.png';

import 'react-awesome-lightbox/build/style.css';
import './infografia.css';

import $ from 'jquery';

const Infografia = ({ location = null }) => {

    const dispacth = useDispatch();
    const history = useHistory();

    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);
    const { favorites } = useSelector(state => state.media);

    const [showShareBox, setshowShareBox] = useState(false);
    const [favoriteSaved, setFavoriteSaved] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1000) {
            $('body').css('overflow', 'hidden');
        }

        verifyFavorite();
    }, []);

    const verifyFavorite = async () => {
        const res = await fecthVerifyFavorite(currentMediaPlaying.mediaId);

        if (res.error) {
            setIsFavorite(false);
        } else {
            setIsFavorite(true);
        }
    }

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

    const handleClosInfografy = () => {
        if (window.innerWidth < 1000) {
            $('body').css('overflow', 'auto');
        }

        location?.pathname.includes('compartido') ? history.push('/contenido-para-profesionales') : dispacth(stopMedia())
    };

    return (
        <div className='infografiapop'>

            <div className='infografiapop_header-section'>
                <div className='infografiapop_header-text'>
                    <h4>{currentMediaPlaying.mediaTitle}</h4>
                    <p>
                        {currentMediaPlaying.mediaText1}
                    </p>
                </div>
                <div
                    className='infografiapop_close-icon'
                    onClick={handleClosInfografy}
                >
                    <img src={CloseIcon} alt='cerra infografia' />
                </div>
            </div>

            <div className='infografiapop_btns-box'>
                {/* {
                    currentMediaPlaying.mediaTitle === "INFOGRAFIA" && (
                        <div
                            onClick={handleSetFavorite}
                            className={favoriteSaved ? 'infografiapop_favorite-icon infografiapop_icon animated rotateIn' : 'infografiapop_favorite-icon infografiapop_icon'}
                            style={{ opacity: isFavorite ? 1 : 0.5 }}
                        >
                            <img src={StarIcon} alt='añadir a favoritos' />
                        </div>
                    )
                } */}
                <a href={currentMediaPlaying.filePath} download={currentMediaPlaying.filePath} className='infografiapop_download-icon infografiapop_icon'>
                    <img src={DownloadIcon} alt='descargar infografia' />
                </a>
                <div className='infografiapop_share-icon infografiapop_icon'>
                    <img
                        className='open-share'
                        src={ShareIcon}
                        alt='compartir'
                        onClick={() => setshowShareBox(!showShareBox)}
                    />

                    {
                        showShareBox &&
                        <div className='infografiapop_share-icons-box'>
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
                </div>
            </div>

            <Lightbox
                image={currentMediaPlaying.filePath}
                title='1/1'
            />
        </div>
    );
}

export default Infografia;