import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playingMedia } from '../../../actions/ui';

import Card from '../cards/Card';
import SubsectionBanner from '../cards/SubsectionBanner';
import Podcast from '../popups/podcats/Podcast';
import Infografia from '../popups/infografias/Infografia';


import DefinicionFalla from '../../../assets/images/definicion-falla-cardiaca.png';
import EpidemiologiaFalla from '../../../assets/images/epidemiologia-falla-cardiaca.png';
import AudioIcon from '../../../assets/images/audio-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import VideoIcon from '../../../assets/images/play_1.png';
import BlogIcon from '../../../assets/images/BLOG_1.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';
import BlogView from '../../../assets/images/ver-blog.png';

import './generalidades.css';

const Generalidades = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);

    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId, filePath));
    };

    return (
        <div className='generalidades' id='section-1'>
            <h2>GENERALIDADES</h2>

            <div className='generalidades_main-wrapper'>

                <div className='generalidades_subsection-wrapper'>
                    {
                        currentMediaPlaying && currentMediaPlaying.sectionId == 1 && currentMediaPlaying.mediaType == 2
                            ?
                            <Podcast />
                            :
                            currentMediaPlaying && currentMediaPlaying.sectionId == 1 && currentMediaPlaying.mediaType == 1
                                ?
                                <Infografia />
                                :
                                <>
                                    <SubsectionBanner
                                        img={require('../../../assets/images/gene1.png')}
                                        title=''
                                        altText='definicion de la falla cardiaca'
                                        color='transparent'
                                    />

                                    <div className='generalidades_subsection-media'>
                                        {
                                            data.map(media => {
                                                if (media.subsection == 1) {
                                                    return (
                                                        <Card
                                                            key={media.id}
                                                            thumbImg={media.thumbnail}
                                                            bcImg={media.background}
                                                            mediaType={media.title}
                                                            text={media.description.split('-')[0]}
                                                            text2={media.description.split('-')[1]}
                                                            icon={
                                                                media.type == 1 ? InfoIcon : media.type == 2 ? AudioIcon : media.type == 3 ? VideoIcon : media.type == 4 ? BlogIcon : ''
                                                            }
                                                            btn={
                                                                media.type == 1 ? ViewInfo : media.type == 2 || media.type == 3 ? PlayPodcast : ''
                                                            }
                                                            customClass=''
                                                            setDisplayMedia={handleDisplayMedia}
                                                            type={media.type}
                                                            sectionId={media.subsection}
                                                            id={media.id}
                                                            filePath={media.file_path}
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

                <div className='generalidades_subsection-wrapper' id='section-2'>
                    {
                        currentMediaPlaying && currentMediaPlaying.sectionId == 2 && currentMediaPlaying.mediaType == 1
                            ?
                            <Infografia />
                            :
                            <>
                                <SubsectionBanner
                                    img={require('../../../assets/images/gene3.png')}
                                    title=''
                                    altText='epidemiologia de la falla cardiaca'
                                    color='transparent'
                                />

                                <div className='generalidades_subsection-media' style={{ marginRight: 5 }}>
                                    {
                                        data.map((media) => {
                                            if (media.subsection == 2) {
                                                return (
                                                    <Card
                                                        key={media.id}
                                                        thumbImg={media.thumbnail}
                                                        filePath={media.file_path}
                                                        mediaType={media.title}
                                                        text={media.description}
                                                        text2={media.description.split('-')[1]}
                                                        type={media.type}
                                                        id={media.id}
                                                        sectionId={media.subsection}
                                                        icon={
                                                            media.type == 1 ? InfoIcon : media.type == 2 ? AudioIcon : media.type == 3 ? VideoIcon : media.type == 4 ? BlogIcon : ''
                                                        }
                                                        btn={
                                                            media.type == 1 ? ViewInfo : media.type == 2 || media.type == 3 ? PlayPodcast : media.type == 4 ? ViewInfo   : ''
                                                        }
                                                        customClass={'unique-card sections'}
                                                        setDisplayMedia={handleDisplayMedia}
                                                        isAvailable={media.available}
                                                    />
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className='generalidades_subsection-media'>
                                    {
                                        data.map((media) => {
                                            if (media.subsection == 3) {
                                                return (
                                                    <Card
                                                        key={media.id}
                                                        thumbImg={media.thumbnail}
                                                        filePath={media.file_path}
                                                        mediaType={media.title}
                                                        text={media.description}
                                                        text2={media.description.split('-')[1]}
                                                        type={media.type}
                                                        id={media.id}
                                                        sectionId={media.subsection}
                                                        icon={
                                                            media.type == 1 ? InfoIcon : media.type == 2 ? AudioIcon : media.type == 3 ? VideoIcon : media.type == 4 ? BlogIcon : ''
                                                        }
                                                        btn={
                                                            media.type == 1 ? ViewInfo : media.type == 2 || media.type == 3 ? PlayPodcast : media.type == 4 ? BlogView : ''
                                                        }
                                                        customClass={'unique-card'}
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

export default Generalidades;