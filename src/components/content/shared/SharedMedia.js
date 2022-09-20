import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { playingMedia } from '../../../actions/ui';

import Infografia from '../popups/infografias/Infografia';
import Podcast from '../popups/podcats/Podcast';
import VideoPopUp from '../popups/videos/VideoPopUp';


import './shared.css';

const SharedMedia = ({ location }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const { data } = useSelector(state => state.media);
    const { playingMedia: currentMediaPlaying } = useSelector(state => state.ui);

    useEffect(() => {

        localStorage.setItem('hash', window.location.pathname.split('/')[3]);
        const hash = localStorage.getItem('hash');

        

        data.map(item => {
            if (hash == item.id) {
                console.log(item);
                dispatch(playingMedia(item.id, item.title, item.description.split('-')[0], item.description.split('-')[1], item.type, item.background, item.subsection, item.file_path));
            }
        });
    }, [dispatch, data, history]);

    return (
        <div className='sharedmedia'>
            {
                currentMediaPlaying && currentMediaPlaying.mediaType == 1 && <Infografia location={location} />
            }
            {
                currentMediaPlaying && currentMediaPlaying.mediaType == 2 && <Podcast location={location} />
            }
            {
                currentMediaPlaying && currentMediaPlaying.mediaType == 3 && <VideoPopUp location={location} />
            }
        </div>
    );
}

export default SharedMedia;