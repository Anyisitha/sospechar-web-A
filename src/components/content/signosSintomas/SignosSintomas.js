import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playingMedia } from '../../../actions/ui';

import Card from '../cards/Card';
import SubsectionBanner from '../cards/SubsectionBanner';

import SintomasSignos from '../../../assets/images/signos1.png';
import VideoIcon from '../../../assets/images/play_1.png';
import AudioIcon from '../../../assets/images/audio-icon.png';
import PlayPodcast from '../../../assets/images/play-podcast-btn.png';
import InfoIcon from '../../../assets/images/infografia-icon.png';
import ViewInfo from '../../../assets/images/infografia-btn.png';

import './signossintomas.css';
import VideoPopUp from '../popups/videos/VideoPopUp';
import Infografia from '../popups/infografias/Infografia';

const SignosSintomas = () => {

    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);
    const [mediaIdPlaying, setmediaIdPlaying] = useState(null);

    const handleDisplayMedia = (id, type, title, text1, text2, bc, sectionId, filePath) => {
        setmediaIdPlaying(id);
        dispatch(playingMedia(id, title, text1, text2, type, bc, sectionId,filePath));
    };

    console.log(currentMediaPlaying)

    return (
        <div className='signossintomas' id='section-3'>
            <h2>SÍNTOMAS Y SIGNOS</h2>

            <div className='signossintomas_main-wrapper'>
                <div className='signossintomas_subsection-wrapper'>
            {console.log(currentMediaPlaying, "hola ver")}


                    {
                        currentMediaPlaying && currentMediaPlaying.sectionId == 16 && currentMediaPlaying.mediaType == 1
                        ?
                        <Infografia />
                        :
                        currentMediaPlaying && mediaIdPlaying == currentMediaPlaying.mediaId && currentMediaPlaying.mediaType == 3
                            ?
                            <VideoPopUp setmediaIdPlaying={setmediaIdPlaying} />
                            :
                            <>
                                <SubsectionBanner
                                    img={SintomasSignos}
                                    title=''
                                    altText='Síntomas y signos de la falla cardíaca'
                                    color=''
                                    classNameDiv="desktop__pr-5 width-94"
                                />

                                <div className='signossintomas_subsection-media'>
                                    {
                                        data.map(media => {
                                            if (media.subsection == 4 && media.section == 1) {
                                                console.log("media", media.file_path)
                                                return (
                                                    <Card
                                                        key={media.id}
                                                        thumbImg={media.thumbnail}
                                                        filePath={media.file_path}
                                                        mediaType={media.title}
                                                        text={media.description}
                                                        type={media.type}
                                                        id={media.id}
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

export default SignosSintomas;