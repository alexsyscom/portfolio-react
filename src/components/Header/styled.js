import styled from "styled-components";
import { screenTabletMin } from "../../assets/breakpoints";

//import images
import headerBg from "../../assets/photo/header_background_1800.png";
import blogBg from "../../assets/icons/bg_blog.png";
import aboutRightBg from "../../assets/icons/about_bg_right.png";
import aboutLeftBg from "../../assets/icons/about_bg_left.png";

const HeaderWrapper = styled.div`
  background-image: ${(props) =>
    props.blog
      ? `url(${blogBg}),url(${headerBg})`
      : `url(${aboutLeftBg}),url(${aboutRightBg}),url(${headerBg})`};
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.blog
      ? `100% 500px, 100% 1080px`
      : `50% 500px, 52% 500px, 100% 1080px`};
  background-position: ${(props) =>
    props.blog ? "0% -190%, 100% 56%" : "0% 269%, 103% 270%, 100% 0%"};
  height: ${(props) => (props.blog ? "430px" : "730px")};
  @media screen and (max-width: ${screenTabletMin}) {
    background-image: url(${headerBg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 100% 0%;
    height: auto;
  }
`;

const HeaderTop = styled.div`
  height: 40px;
  width: auto;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { HeaderWrapper, HeaderTop };
