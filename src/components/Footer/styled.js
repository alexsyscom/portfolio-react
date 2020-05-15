import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  @media screen and (max-width: 719px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const FooterDecorator = styled.div`
  border: 1px solid gray;
  margin: 10px;
  @media screen and (max-width: 719px) {
    margin: 0 0 0 0.8em;
    width: 96%;
    height: 0;
  }
`;

const SiteMap = styled.nav`
  width: 33%;
  color: white;
  @media screen and (max-width: 719px) {
    width: auto;
  }
`;

const MessageText = styled.div`
  width: 33%;
  color: white;
  margin: 26px;
  @media screen and (max-width: 719px) {
    width: auto;
    text-align: center;
  }
`;
const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: blue;
  @media screen and (max-width: 719px) {
    text-align: center;
  }
`;

export const Styled = {
  Footer,
  FooterDecorator,
  SiteMap,
  MessageText,
  Copyright,
};
