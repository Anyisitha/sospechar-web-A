import styled from "styled-components";

export const StyledContentFirstSection = styled.div`
  ${({ principalBanner }) =>
    principalBanner &&
    `${({ numberSections }) =>
      numberSections === 1
        ? "width: 100%;"
        : numberSections === 2
        ? "width: 69.5vw;"
        : "width: 32.2%;"}`}

  ${({ principalBanner, numberSections }) =>
    !principalBanner && numberSections === 1
      ? `width: 100%;`
      : numberSections === 2
      ? `width: 72%;`
      : `width: 32.2%;`}

  .content {
    width: 100%;

    .card {
      width: 100%;
      height: 290px;
    }
  }

  ${({ principalBanner }) =>
    !principalBanner && "display: flex; flex-wrap: wrap; gap: 10px;"}

  @media (max-width: 1302px) {
    width: 100%;

    ${({ principalBanner }) =>
      !principalBanner && "display: flex; flex-wrap: wrap; gap: 10px;"}

    .content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .card:first-child {
        width: 100%;
        height: 290px;
      }

      .card {
        width: 49%;
        height: 290px;

        .card-sup-icon {
          width: 46px;
          height: 46px;
        }

        .card-play-btn {
          width: 130px;
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    .content {
      .card {
        width: 100%;
      }
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 880px;

  @media (max-width: 1024px) {
    height: 520px;
    margin-top: 10px;
  }
`;
