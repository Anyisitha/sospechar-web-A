import React from "react";
import PropTypes from "prop-types";
/** Styles */
import {
  StyledContainer,
} from "./SingularSection.styles";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

const SingularSections = (props) => {
  /** Props */
  const {
    numberSections,
    withBannerPrincipal,
    principalBanner,
    mediaArray,
    section,
    subSection,
    handleDisplayMedia,
  } = props;

  console.log(mediaArray);

  return (
    <StyledContainer>
      {withBannerPrincipal ? (
        <FirstSection
          principalBanner
          principalBannerImage={principalBanner}
          numberSections={numberSections}
        />
      ) : (
        <FirstSection
            numberSections={numberSections}
            content={mediaArray.filter(item => item.section === section)}
            subsection={subSection[0]}
            handleDisplayMedia={handleDisplayMedia}
        />
      )}
      <SecondSection 
        numberSections={numberSections}
        content={mediaArray.filter(item => item.section === section)}
        subsections={!withBannerPrincipal ? [subSection[1], subSection[2]] : subSection}
        handleDisplayMedia={handleDisplayMedia}
        withBanner={withBannerPrincipal}
      />
    </StyledContainer>
  );
};

SingularSections.propTypes = {
  withBannerPrincipal: PropTypes.bool,
  principalBanner: PropTypes.string,
  numberSections: PropTypes.number.isRequired,
  mediaArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  section: PropTypes.string.isRequired,
  subSection: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleDisplayMedia: PropTypes.any.isRequired,
};

export default SingularSections;
