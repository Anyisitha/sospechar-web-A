import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../cards/Card';
import SubsectionBanner from '../cards/SubsectionBanner';
import Podcast from '../popups/podcats/Podcast';
import { playingMedia } from '../../../actions/ui';

import Comorbilidades from '../../../assets/images/comorbilidades-comunes.png'
import Prevencion from '../../../assets/images/prevencion-falla-cardiaca.png'
import VideoIcon from '../../../assets/images/serie-icon.png';
import AudioIcon from '../../../assets/images/audio-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';

import './conciencia.css';
import Infografia from '../popups/infografias/Infografia';

const Conciencia = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);

    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId, filePath));
    };

    return (
        <div className='conciencia' id='section-5'>
            <h2>CONCIENCIA Y PREVENCIÓN</h2>

            <div className='conciencia_main-wrapper'>
                <div className='conciencia_subsection-wrapper'> 
                    {
                        currentMediaPlaying && currentMediaPlaying.sectionId == 7 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                <SubsectionBanner
                                    img={Comorbilidades}
                                    title='Comorbilidades comunes'
                                    altText='Comorbilidades comunes'
                                    color='rgba(152, 93, 11, .7)'
                                />

                                <div className='conciencia_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 7) {
                                                return (
                                                    <Card
                                                        key={media.id}
                                                        thumbImg={media.thumbnail}
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
                                                        customClass='unique-card'
                                                        setDisplayMedia={handleDisplayMedia}
                                                        isAvailable={media.available}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </>
                    }
                </div>
                <div className='conciencia_subsection-wrapper' id='section-6'>

                    {
                        currentMediaPlaying && currentMediaPlaying.sectionId == 8 && currentMediaPlaying.mediaType == 2
                            ?
                            <Podcast />
                            :
                            <>
                                <SubsectionBanner
                                    img={Prevencion}
                                    title='Prevención de la falla cardíaca'
                                    altText='Prevención de la falla cardíaca'
                                    color='rgba(152, 93, 11, .7)'
                                />

                                <div className='conciencia_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 8) {
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
                                                        customClass='unique-card'
                                                        setDisplayMedia={handleDisplayMedia}
                                                        isAvailable={media.available}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Conciencia;