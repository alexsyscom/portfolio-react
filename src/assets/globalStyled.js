import { createGlobalStyle } from "styled-components";
import RobotoRegularFont from "../assets/fonts/Roboto-Regular.ttf";
import RobotoLightFont from "../assets/fonts/Roboto-Light.ttf";
import SansusRegularFont from "../assets/fonts/Sansus-Webissimo-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "RobotoRegular";
    font-size: 16px;
  }

  h1 {
    font-size: 63px;
    font-family: "SansusRegular";
  }

  h2 {
    font-size: 35px;
    font-family: "SansusRegular";
    text-align: center;
    margin-bottom: 40px;
  }

  html {
    scroll-behavior: smooth;
  }

  footer {
    color: white;
    width: -webkit-fill-available;
    background-color: black;
    opacity: 0.6;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #f2f0e8;
    height: auto;
    scroll-behavior: smooth;
    @media screen and (max-width: 719px){
      flex-direction: column;
      align-items: center;
    }
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  @font-face {
    font-family: "RobotoRegular";
    src: url(${RobotoRegularFont}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "RobotoLight";
    src: url(${RobotoLightFont}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "SansusRegular";
    src: url(${SansusRegularFont}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
`;