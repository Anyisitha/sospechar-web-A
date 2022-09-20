import React from "react";
import PropTypes from "prop-types";
/** Styles */
import { StyledContentSecondSection } from "./SecondSection.styles";
/** Components */
import Card from "../../../../cards/Card";
/** Assets */
import InfoIcon from "../../../../../../assets/images/infografia-icon.png";
import AudioIcon from "../../../../../../assets/images/audio-icon.png";
import VideoIcon from "../../../../../../assets/images/video-icon.png";
import ViewInfo from "../../../../../../assets/images/infografia-btn.png";
import PlayPodcast from "../../../../../../assets/images/play-podcast-btn.png";

/**
 * @class SecondSection
 * @param {Object} props
 * @param {number} props.numberSections - number of sections to display in columns
 * @param {any} props.content - Array or object containing the media content.
 * @param {void} props.handleDisplayMedia - function for open popups.
 * @param {Array<string>} props.subsections - Array of strings containing the subsections' id.
 * @param {boolean} props.withBanner - Flag indicating section has principal banner
 */
const SecondSection = ({
  numberSections,
  content,
  handleDisplayMedia,
  subsections,
  withBanner,
}) => {
  return (
    <StyledContentSecondSection numberSections={numberSections}>
      <div className="middle">
        {content.map(
          (media, index) =>
            media.subsection === subsections[0] && (
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
      <div className="middle">
        {content.map(
          (media, index) =>
            media.subsection === subsections[1] && (
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
      {withBanner && (
        <div className="full">
          {content.map(
            (media, index) =>
              media.subsection === subsections[2] && (
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
                  info={media.info}
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
                  code={media.code}
                />
              )
          )}
        </div>
      )}
    </StyledContentSecondSection>
  );
};

SecondSection.propTypes = {
  numberSections: PropTypes.number.isRequired,
  content: PropTypes.any,
  handleDisplayMedia: PropTypes.func.isRequired,
  subsections: PropTypes.arrayOf(PropTypes.string).isRequired,
  withBanner: PropTypes.bool
};

export default SecondSection;
