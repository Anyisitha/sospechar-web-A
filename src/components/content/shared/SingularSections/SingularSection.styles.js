import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  className: "singular-section-container",
})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const StyledFirstSection = styled.div`
  ${(props) =>
    props.numberSections === 1
      ? "width: 100%;"
      : props.numberSections === 2
      ? "width: 75%;"
      : "width: 33%;"}
`;

export const StyledSecondSection = styled.div`
  ${(props) =>
    props.numberSections === 1
      ? "width: 100%;"
      : props.numberSections === 2
      ? "width: 75%;"
      : "width: 33%;"}

  .card {
    width: 610px;
    height: 302px;

    @media (max-width: 1300px) {
      height: 200px !important;
    }
  }
`;

export const StyledImage = styled.img.attrs({
  className: "section-image",
})`
  width: 100%;
`;
