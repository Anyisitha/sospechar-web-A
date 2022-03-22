import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playingMedia } from '../../../actions/ui';

import SubsectionBanner from '../cards/SubsectionBanner';
import Card from '../cards/Card';
import Podcast from '../popups/podcats/Podcast';
import VideoPopUp from '../popups/videos/VideoPopUp';
import Infografia from '../popups/infografias/Infografia';

import ClasificacionBanner from '../../../assets/images/enfermedades.png'
import CriteriosBanner from '../../../assets/images/caida.png'
import HerramientasBanner from '../../../assets/images/herramientas-diagnosticas-banner.png'

import AudioIcon from '../../../assets/images/audio-icon.png';
import VideoIcon from '../../../assets/images/video-icon.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';

import "./prevencion.css"

const PrevencionContent = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);


    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId, filePath));
    };

    console.log(currentMediaPlaying)

    return (
        <div style={{ width: "100%" }}>
            <div className='prevencion_subsection-wrapper prevencion_subsection-wrapper-1' id="section-concientes">
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 4 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 11 && currentMediaPlaying.mediaType == 3
                            ?
                            <VideoPopUp />
                            :
                            <>
                                <SubsectionBanner
                                    img={ClasificacionBanner}
                                    title=''
                                    altText='Clasificación de la falla cardíaca'
                                    color=''
                                />

                                <div className='diagnostico_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 10 && media.section == 7) {
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
                                                        customClass='unique-card sections mr-5'
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className='diagnostico_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 11 && media.section == 8) {
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
                                </div>
                            </>
                }
            </div>

            <div className='prevencion_subsection-wrapper' id='section-others'>
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 12 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 5 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                <SubsectionBanner
                                    img={CriteriosBanner}
                                    title=''
                                    altText='Criterios de diagnóstico de la falla cardíaca'
                                    color=''
                                />

                                <div className='prevencion_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 12 && media.section == 9) {
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
                                </div>
                            </>
                }
            </div>

            <div className='prevencion_subsection-wrapper' id='section-herramientas'>
                {currentMediaPlaying && currentMediaPlaying.sectionId == 6 && currentMediaPlaying.mediaType == 2
                    ?
                    <Podcast />
                    :
                    currentMediaPlaying && currentMediaPlaying.sectionId == 6 && currentMediaPlaying.mediaType == 1
                        ?
                        <Infografia />
                        :
                        <>
                            {/* <SubsectionBanner
                                img={HerramientasBanner}
                                title='Herramientas diagnósticas de la falla cardíaca'
                                altText='Herramientas diagnósticas de la falla cardíaca'
                                color='rgba(50, 53, 63, .8)'
                            /> */}

                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 13 && media.section == 10) {
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
                                        if (media.subsection == 14 && media.section == 11) {
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
                                                    customClass='mr-5 unique-card sections'
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 15 && media.section == 12) {
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
                                                    customClass='mr-5 unique-card sections'
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </>
                }
            </div>
            <div className='prevencion_subsection-wrapper prevencion_subsection-wrapper-1' id="section-prevencion">
                {
                    currentMediaPlaying && currentMediaPlaying.sectionId == 4 && currentMediaPlaying.mediaType == 2
                        ?
                        <Podcast />
                        :
                        currentMediaPlaying && currentMediaPlaying.sectionId == 11 && currentMediaPlaying.mediaType == 3
                            ?
                            <VideoPopUp />
                            :
                            <>
                                <SubsectionBanner
                                    img={require("../../../assets/images/fila1.png")}
                                    title=''
                                    altText='Clasificación de la falla cardíaca'
                                    color=''
                                />

                                <div className='diagnostico_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 16 && media.section == 13) {
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
                                                        customClass='unique-card sections mr-5'
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className='diagnostico_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 17 && media.section == 14) {
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
            <div className='prevencion_subsection-wrapper' id='section-herramientas'>
                {currentMediaPlaying && currentMediaPlaying.sectionId == 6 && currentMediaPlaying.mediaType == 2
                    ?
                    <Podcast />
                    :
                    currentMediaPlaying && currentMediaPlaying.sectionId == 6 && currentMediaPlaying.mediaType == 1
                        ?
                        <Infografia />
                        :
                        <>
                            {/* <SubsectionBanner
                                img={HerramientasBanner}
                                title='Herramientas diagnósticas de la falla cardíaca'
                                altText='Herramientas diagnósticas de la falla cardíaca'
                                color='rgba(50, 53, 63, .8)'
                            /> */}

                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 18 && media.section == 15) {
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
                                                    customClass='mr-5 unique-card sections'
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 19 && media.section == 16) {
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
                                                    customClass='mr-5 unique-card sections'
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className='diagnostico_subsection-media'>
                                {
                                    data.map(media => {
                                        if (media.subsection == 20 && media.section == 17) {
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
                                                    customClass='mr-5 unique-card sections'
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

export default PrevencionContent;