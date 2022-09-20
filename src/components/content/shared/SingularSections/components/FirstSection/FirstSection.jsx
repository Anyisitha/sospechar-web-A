import React, { Fragment } from "react";
import PropTypes from "prop-types";
/** Styles */
import { StyledContentFirstSection, StyledImage } from "./FirstSection.styles";
/** Components */
import Card from "../../../../cards/Card";
/** Assets */
import InfoIcon from "../../../../../../assets/images/infografia-icon.png";
import AudioIcon from "../../../../../../assets/images/audio-icon.png";
import VideoIcon from "../../../../../../assets/images/video-icon.png";
import ViewInfo from "../../../../../../assets/images/infografia-btn.png";
import PlayPodcast from "../../../../../../assets/images/play-podcast-btn.png";

/**
 * @class FirstSection
 * @param {Object} props
 * @param {boolean} props.principalBanner - Flag that indicates if it is a principal banner or card.
 * @param {string} props.principalBannerImage - images's url of principal banner.
 * @param {number} props.numberSections - Number of section in container.
 * @param {any} props.content - Content of principal banner or array,
 * @param {string} props.subsection - subsection to render
 * @param {void} props.handleDisplayMedia - function to display media
 */
const FirstSection = ({
  principalBanner,
  principalBannerImage,
  numberSections,
  content,
  subsection,
  handleDisplayMedia,
}) => {
  return (
    <Fragment>
      {principalBanner ? (
        <StyledContentFirstSection
          numberSections={numberSections}
          principalBanner={true}
        >
          <StyledImage src={principalBannerImage} />
        </StyledContentFirstSection>
      ) : (
        <StyledContentFirstSection
          numberSections={numberSections}
          principalBanner={false}
        >
          <div className="content">
            {content.map(
              (media, index) =>
                media.subsection === subsection[0] && (
                  <Card
                    key={index}
                    thumbImg={media.thumbnail}
                    filePath={media.file_path}
                    bcImg={media.background}
                    mediaType={media.title}
                    text={media.description.split("-")[0]}
                    text2={media.description.split("-")[1]}
                    type={media.type}
                    id={media.id}
                    sectionId={media.subsection}
                    icon={
                      media.type == 1
                        ? InfoIcon
                        : media.type == 2
                        ? AudioIcon
                        : media.type == 3
                        ? VideoIcon
                        : ""
                    }
                    btn={
                      media.type == 1
                        ? ViewInfo
                        : media.type == 2 || media.type == 3
                        ? PlayPodcast
                        : ""
                    }
                    setDisplayMedia={handleDisplayMedia}
                    isAvailable={media.available}
                    customClass="seguimiento-row-4 unique-card sections"
                  />
                )
            )}
          </div>
        </StyledContentFirstSection>
      )}
    </Fragment>
  );
};

FirstSection.propTypes = {
  principalBanner: PropTypes.bool,
  principalBannerImage: PropTypes.string,
  numberSections: PropTypes.number.isRequired,
  content: PropTypes.any,
  subsection: PropTypes.string,
  handleDisplayMedia: PropTypes.func,
};

export default FirstSection;
