import React from "react";
import ReactTooltip from "react-tooltip";

import DumiThumb from "../../../assets/images/dumi-1.png";

import "./card.css";

const Card = ({
  thumbImg = DumiThumb,
  bcImg,
  mediaType,
  text,
  text2 = "",
  icon,
  btn,
  customClass,
  setDisplayMedia,
  type,
  sectionId,
  id,
  scroll = null,
  filePath,
  isAvailable,
  code,
  isSecond,
  info,
}) => {
  return (
    <div
      className={"card podcast-card relative " + customClass}
      onClick={() => {
        if (isAvailable == 1) {
          if (mediaType === "TEST") {
            window.open(filePath, "_blank");
          } else {
            setDisplayMedia(
              id,
              type,
              mediaType,
              text,
              text2,
              bcImg,
              sectionId,
              filePath,
              code,
              isSecond,
              info
            );
            if (scroll) scroll();
          }
        } else {
          return false;
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <img className="card-bc" src={thumbImg} alt="dumi" />

      <h4 className="card-title">{mediaType}</h4>
      <p className="card-text">{text}</p>

      <img
        className="card-sup-icon card-icon"
        src={icon}
        alt="icono de audio"
      />
      <ReactTooltip id={`tooltip-${id}`} type="dark" />

      <img
        data-tip="Contenido disponible próximamente"
        data-for={isAvailable == 0 ? `tooltip-${id}` : ""}
        style={{ cursor: isAvailable == 0 && "not-allowed" }}
        className="card-play-btn card-icon"
        src={btn}
        alt="reproducir podcast"
        title="this will be displayed as a tooltip"
        onClick={() => {
          if (isAvailable == 1) {
            if (mediaType === "TEST") {
              window.open(filePath, "_blank");
            } else {
              setDisplayMedia(
                id,
                type,
                mediaType,
                text,
                text2,
                bcImg,
                sectionId,
                filePath,
                code,
                isSecond,
                info
              );
              if (scroll) scroll();
            }
          } else {
            return false;
          }
        }}
      />
    </div>
  );
};

export default Card;
