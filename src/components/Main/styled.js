import styled from "styled-components";
import leftSideCaptionBg from "../../assets/icons/stars_left_side.png";

const SidesCommon = styled.section`
  width: 50%;
  height: 100%;
`;
const LeftSide = styled(SidesCommon)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f2f0e8;
  @media screen and (max-width: 719px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const RightSide = styled(SidesCommon)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #eae8e2;
  @media screen and (max-width: 719px) {
    width: 100%;
  }
`;
const Common = styled.div`
  width: 50%;
`;
const LeftSideCaption = styled(Common)`
  background-image: url(${leftSideCaptionBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: auto;
  text-align: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const AboutMe = styled(Common)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: -webkit-fill-available;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const AboutMePhoto = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 3px;
  @media screen and (max-width: 719px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const Styled = {
  LeftSide,
  RightSide,
  LeftSideCaption,
  AboutMe,
  AboutMePhoto,
};
