import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playingMedia } from '../../../actions/ui';

import SubsectionBanner from '../cards/SubsectionBanner';
import Card from '../cards/Card';
import Podcast from '../popups/podcats/Podcast';
import VideoPopUp from '../popups/videos/VideoPopUp';
import Infografia from '../popups/infografias/Infografia';

import ClasificacionBanner from '../../../assets/images/ancho.png'
import CriteriosBanner from '../../../assets/images/criterios-diagnostico-banner.png'
import HerramientasBanner from '../../../assets/images/CUIDADORES_1.png'

import AudioIcon from '../../../assets/images/audio-icon.png';
import VideoIcon from '../../../assets/images/video-icon.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';

const SeguimientoContent = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);


    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId, filePath));
    };

    console.log(currentMediaPlaying)

    return (
        <div style={{ width: "100%" }}>
            <div className='seguimiento_subsection-wrapper' id="section-pacientes">
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 4 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 4 && currentMediaPlaying.mediaType == 3
                            ?
                            <VideoPopUp />
                            :
                            <>
                                <SubsectionBanner
                                    img={ClasificacionBanner}
                                    title=''
                                    altText='Clasificación de la falla cardíaca'
                                    color='transparent'
                                    style={{ width: "100%" }}
                                />

                                {/* <div className='diagnostico_subsection-media'>
                                    {   
                                        data.map(media => {
                                            if (media.subsection == 4) {
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
                                                        customClass=''
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div> */}
                            </>
                }
            </div>

            <div className='seguimiento_subsection-wrapper' id='section-criterios'>
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                {/* <SubsectionBanner
                                    img={CriteriosBanner}
                                    title='Criterios de diagnóstico de la falla cardíaca'
                                    altText='Criterios de diagnóstico de la falla cardíaca'
                                    color='rgba(50, 53, 63, .8)'
                                /> */}
                                 {
                                        data.map(media => {
                                            if (media.subsection == 5 && media.section == 5) {
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
                                                        customClass='mr-5 unique-card sections'
                                                    />
                                                )
                                            }
                                        })
                                    }
                                    
                                {/* <div className='diagnostico_subsection-media'>
                                   
                                </div> */}
                            </>
                }
            </div>
            <div className='seguimiento_subsection-wrapper' id='section-criterios'>
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                {/* <SubsectionBanner
                                    img={CriteriosBanner}
                                    title='Criterios de diagnóstico de la falla cardíaca'
                                    altText='Criterios de diagnóstico de la falla cardíaca'
                                    color='rgba(50, 53, 63, .8)'
                                /> */}
                                 {
                                        data.map(media => {
                                            if (media.subsection == 6 && media.section == 5) {
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
                                                        customClass='mr-5 unique-card sections'
                                                    />
                                                )
                                            }
                                        })
                                    }
                                    
                                {/* <div className='diagnostico_subsection-media'>
                                   
                                </div> */}
                            </>
                }
            </div>
            <div className='seguimiento_subsection-wrapper' id='section-criterios'>
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                {/* <SubsectionBanner
                                    img={CriteriosBanner}
                                    title='Criterios de diagnóstico de la falla cardíaca'
                                    altText='Criterios de diagnóstico de la falla cardíaca'
                                    color='rgba(50, 53, 63, .8)'
                                /> */}
                                 {
                                        data.map(media => {
                                            if (media.subsection == 7 && media.section == 5) {
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
                                                        customClass='mr-5 unique-card sections'
                                                    />
                                                )
                                            }
                                        })
                                    }
                                    
                                {/* <div className='diagnostico_subsection-media'>
                                   
                                </div> */}
                            </>
                }
            </div>

            <div className='seguimiento_subsection-wrapper' id='section-cuidadores'>
                {currentMediaPlaying && currentMediaPlaying.sectionId == 6 && currentMediaPlaying.mediaType == 2
                    ?
                    <Podcast />
                    :
                    currentMediaPlaying && currentMediaPlaying.sectionId == 8 && currentMediaPlaying.mediaType == 1
                        ?
                        <Infografia />
                        :
                        <>
                            <SubsectionBanner
                                img={HerramientasBanner}
                                title=''
                                altText='Herramientas diagnósticas de la falla cardíaca'
                                color=''
                                style={{ width: "35%"}}
                                isSectionFull
                            />

                            <div className='diagnostico_subsection-media mr-5'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 8 && media.section == 5) {
                                            return (
                                                <Card
                                                    key={media.id}
                                                    thumbImg={media.thumbnail}
                                                    filePath={media.file_path}
                                                    bcImg={media.background}
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
                                                    customClass='unique-card sections'
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 9 && media.section == 5) {
                                            return (
                                                <Card
                                                    key={media.id}
                                                    thumbImg={media.thumbnail}
                                                    filePath={media.file_path}
                                                    bcImg={media.background}
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
                                                    customClass='unique-card sections'
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
    );
}

export default SeguimientoContent;