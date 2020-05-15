import styled from "styled-components";
import headerBackground from "../../assets/photo/header_background_1800.png";
import blogBg from "../../assets/icons/bg_blog.png";
import aboutRight from "../../assets/icons/about_bg_right.png";
import aboutLeft from "../../assets/icons/about_bg_left.png";

const Header = styled.div`
  background-image: ${(props) =>
    props.blog
      ? `url(${blogBg}),url(${headerBackground})`
      : `url(${aboutLeft}),url(${aboutRight}),url(${headerBackground})`};
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.blog
      ? `100% 500px, 100% 1080px`
      : `50% 500px, 52% 500px, 100% 1080px`};
  background-position: ${(props) =>
    props.blog ? "0% -190%, 100% 56%" : "0% 269%, 103% 270%, 100% 0%"};
  height: ${(props) => (props.blog ? "430px" : "730px")};
  @media screen and (max-width: 719px) {
    background-image: url(${headerBackground});
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

export const Styled = {
  Header,
  HeaderTop,
};
