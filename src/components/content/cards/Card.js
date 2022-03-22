import React from 'react';
import ReactTooltip from 'react-tooltip';

import DumiThumb from '../../../assets/images/dumi-1.png'

import './card.css';

const Card = ({ thumbImg = DumiThumb, bcImg, mediaType, text, text2 = '', icon, btn, customClass, setDisplayMedia, type, sectionId, id, scroll = null, filePath, isAvailable }) => {
    console.log(filePath)
    return (
        <div className={'card podcast-card relative ' + customClass}>
            <img className='card-bc' src={thumbImg} alt='dumi' />

            <h4 className='card-title'>
                {mediaType}
            </h4>
            <p className='card-text'>
                {text}
            </p>

            <img className='card-sup-icon card-icon' src={icon} alt='icono de audio' />

            {
                isAvailable == 0 &&
                <ReactTooltip id='tooltip' type='dark'>
                    <span className='tooltip'>
                        Este material aún no esta disponible
                    </span>
                </ReactTooltip>
            }


            <img
                data-tip
                data-for={isAvailable == 0 ? 'tooltip' : ''}
                style={{ cursor: isAvailable == 0 && 'not-allowed' }}
                className='card-play-btn card-icon'
                src={btn}
                alt='reproducir podcast'
                onClick={() => {
                    console.log("card", filePath)
                    if (isAvailable == 1) {
                        setDisplayMedia(id, type, mediaType, text, text2, bcImg, sectionId, filePath);
                        if (scroll) scroll();
                    } else {
                        return false;
                    }
                }}
            />
        </div >
    );
}

export default Card;