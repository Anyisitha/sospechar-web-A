import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFavoritesFetching } from '../../../actions/media';
import { playingMedia } from '../../../actions/ui';
import Carrusel from '../carrusel/Carrusel';
import Card from '../cards/Card';
import Podcast from '../popups/podcats/Podcast';
import Infografia from '../popups/infografias/Infografia';
import VideoPopUp from '../popups/videos/VideoPopUp';

import AudioIcon from '../../../assets/images/audio-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';
import VideoIcon from '../../../assets/images/video-icon.png';


import './favorites.css';

const Favorites = () => {
    
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);

    useEffect(() => {
        handleGetFavorites();
    }, []);

    const handleGetFavorites = async () => {
        dispatch(startFavoritesFetching());
    }

    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId, filePath));
    };

    return (
        <>
            <Carrusel />

            <div className='favorites' id='section-favoritos'>
                <h3>MIS FAVORITOS</h3>

                {
                    favorites.length == 0 &&
                    <div className='favorites_no-articles'>
                        <p>
                            No tienes ningún favorito añadido
                        </p>
                    </div>
                }

                {

                    currentMediaPlaying && currentMediaPlaying.mediaType == 1
                        ?
                        <Infografia />
                        :
                        currentMediaPlaying && currentMediaPlaying.mediaType == 2
                            ?
                            <Podcast />
                            :
                            currentMediaPlaying && currentMediaPlaying.mediaType == 3
                                ?
                                <VideoPopUp />
                                :

                                <div className='favorites_media-wrapper'>
                                    {
                                        favorites.map(media => {
                                            return (
                                                <Card
                                                    key={media.id}
                                                    thumbImg={media.thumbnail}
                                                    bcImg={media.background}
                                                    filePath={media.file_path}
                                                    mediaType={media.title}
                                                    text={media.description.split('-')[0]}
                                                    text2={media.description.split('-')[1]}
                                                    type={media.type}
                                                    id={media.id}
                                                    sectionId={media.subsection}
                                                    icon={
                                                        media.type == 1 ? InfoIcon : media.type == 2 ? AudioIcon : media.type == 3 ? VideoIcon : ''
                                                    }
                                                    btn={
                                                        media.type == 1 ? ViewInfo : media.type == 2 || media.type == 3 ? PlayPodcast : ''
                                                    }
                                                    setDisplayMedia={handleDisplayMedia}
                                                    isAvailable={media.available}
                                                />
                                            )
                                        })
                                    }
                                </div>
                }
            </div>
        </>
    );
}

export default Favorites;