import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playingMedia } from "../../../actions/ui";

import SubsectionBanner from "../cards/SubsectionBanner";
import Card from "../cards/Card";
import Podcast from "../popups/podcats/Podcast";
import VideoPopUp from "../popups/videos/VideoPopUp";
import Infografia from "../popups/infografias/Infografia";

import ClasificacionBanner from "../../../assets/images/clasificacion-falla-cardiaca-banner.png";
import CriteriosBanner from "../../../assets/images/criterios-diagnostico-banner.png";
import HerramientasBanner from "../../../assets/images/herramientas-diagnosticas-banner.png";

import AudioIcon from "../../../assets/images/audio-icon.png";
import VideoIcon from "../../../assets/images/video-icon.png";
import InfoIcon from "../../../assets/images/infografia-icon.png";
import PlayPodcast from "../../../assets/images/play-podcast-btn.png";
import ViewInfo from "../../../assets/images/infografia-btn.png";
import BlogView from "../../../assets/images/ver-blog.png";
import BlogIcon from "../../../assets/images/BLOG_1.png";

const DiagnosticoContent = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.media);
  const { playingMedia: currentMediaPlaying } = useSelector(
    (state) => state.ui
  );

  const handleDisplayMedia = (
    id,
    type,
    title,
    text1,
    text2,
    bc,
    sectionId,
    filePath,
    code
  ) => {
    dispatch(
      playingMedia(id, title, text1, text2, type, bc, sectionId, filePath, code)
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="diagnostico_subsection-wrapper"
        id="section-clasificacion"
      >
        {currentMediaPlaying &&
        currentMediaPlaying.sectionId == 4 &&
        currentMediaPlaying.mediaType == 2 ? (
          <Podcast />
        ) : currentMediaPlaying &&
          currentMediaPlaying.sectionId == 4 &&
          currentMediaPlaying.mediaType == 3 ? (
          <VideoPopUp />
        ) : currentMediaPlaying &&
          currentMediaPlaying.sectionId == 4 &&
          currentMediaPlaying.mediaType == 1 ? (
          <Infografia />
        ) : (
          <>
            <SubsectionBanner
              img={ClasificacionBanner}
              title=""
              altText="Clasificación de la falla cardíaca"
              color="transparent"
              classNameDiv="banner-70 desktop__pr-5"
            />

            <div className="diagnostico_subsection-media">
              {data.map((media) => {
                if (media.subsection == 4 && media.section == 4) {
                  return (
                    <Card
                      key={media.id}
                      thumbImg={media.thumbnail}
                      bcImg={media.background}
                      filePath={media.file_path}
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
                          : media.type == 4
                          ? BlogIcon
                          : ""
                      }
                      btn={
                        media.type == 1
                          ? ViewInfo
                          : media.type == 2 || media.type == 3
                          ? PlayPodcast
                          : media.type == 4
                          ? ViewInfo
                          : ""
                      }
                      setDisplayMedia={handleDisplayMedia}
                      isAvailable={media.available}
                      customClass="diagnostico-double-row-1 unique-card sections"
                      code={media.code}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>

      <div className="diagnostico_subsection-wrapper" id="section-criterios">
        {currentMediaPlaying &&
        currentMediaPlaying.sectionId == 5 &&
        currentMediaPlaying.mediaType == 2 ? (
          <Podcast />
        ) : currentMediaPlaying &&
          currentMediaPlaying.sectionId == 5 &&
          currentMediaPlaying.mediaType == 1 ? (
          <Infografia />
        ) : (
          <>
            <SubsectionBanner
              img={CriteriosBanner}
              title=""
              altText="Criterios de diagnóstico de la falla cardíaca"
              color="transparent"
              classNameDiv="banner-70 desktop__pr-5"
            />

            <div className="diagnostico_subsection-media">
              {data.map((media) => {
                if (media.subsection == 5 && media.section == 4) {
                  return (
                    <Card
                      key={media.id}
                      thumbImg={media.thumbnail}
                      bcImg={media.background}
                      filePath={media.file_path}
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
                          : media.type == 4
                          ? BlogIcon
                          : ""
                      }
                      btn={
                        media.type == 1
                          ? ViewInfo
                          : media.type == 2 || media.type == 3
                          ? PlayPodcast
                          : media.type == 4
                          ? ViewInfo
                          : ""
                      }
                      setDisplayMedia={handleDisplayMedia}
                      isAvailable={media.available}
                      customClass="diagnostico-double-row-2 unique-card sections"
                      code={media.code}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>

      <div className="diagnostico_subsection-wrapper" id="section-herramientas">
        {currentMediaPlaying &&
        currentMediaPlaying.sectionId == 6 &&
        currentMediaPlaying.mediaType == 2 ? (
          <Podcast />
        ) : currentMediaPlaying &&
          currentMediaPlaying.sectionId == 6 &&
          currentMediaPlaying.mediaType == 1 ? (
          <Infografia />
        ) : (
          <>
            <SubsectionBanner
              img={HerramientasBanner}
              title=""
              altText="Herramientas diagnósticas de la falla cardíaca"
              color="transparent"
              classNameDiv="banner-70 desktop__pr-5"
            />

            <div className="diagnostico_subsection-media">
              {data.map((media) => {
                if (media.subsection == 6 && media.section == 4) {
                  return (
                    <Card
                      key={media.id}
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
                          : media.type == 4
                          ? BlogIcon
                          : ""
                      }
                      btn={
                        media.type == 1
                          ? ViewInfo
                          : media.type == 2 || media.type == 3
                          ? PlayPodcast
                          : media.type == 4
                          ? ViewInfo
                          : ""
                      }
                      setDisplayMedia={handleDisplayMedia}
                      isAvailable={media.available}
                      customClass="diagnostico-double-row-3 unique-card sections"
                      code={media.code}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiagnosticoContent;
