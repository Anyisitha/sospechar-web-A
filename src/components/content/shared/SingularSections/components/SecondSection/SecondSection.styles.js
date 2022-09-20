import styled from "styled-components";

export const StyledContentSecondSection = styled.div`
    ${({numberSections}) => numberSections === 3 ? "width: 67%;" : "width: 31.2vw;"}

    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .card {
        width: 100%;
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

    .middle {
        width: 49.5%;
    }

    .full {
        width: 100%;
    }

    @media (max-width: 1545px) {
        ${({numberSections}) => numberSections === 3 ? "width: 67%;" : "width: 31.2vw;"}

        .middle {
            width: 49.4%;
        }
    }

    @media (max-width: 1302px) {
        width: 100%;

        .middle {
            width: 49%;

            .card {
                &:not(:first-child) {
                    margin-top: 10px;
                }
            }
        }
    }

    @media (max-width: 767px) {
        width: 100%;

        .middle {
            width: 100%;

            .card {
                &:last-child {
                    margin-top: 10px;
                }
            }
        }
    }

    
`;