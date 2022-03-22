import React from 'react';

import './subsectionbanner.css';

const SubsectionBanner = ({ img, title, altText, color, style, isSectionFull }) => {
    return (
        <div className='subsection-title relative mr-5' style={style}>
            <img src={img} alt={ altText } style={!isSectionFull ? style : { width: "100%" }} />

            <h3 style={{backgroundColor: color}}>
                { title }
            </h3>
        </div>
    );
}

export default SubsectionBanner;