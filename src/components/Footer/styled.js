import styled from "styled-components";
import { screenTabletMin } from "../../assets/breakpoints";

const FooterWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${screenTabletMin}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const FooterDecorator = styled.div`
  border: 1px solid gray;
  margin: 10px;
  @media screen and (max-width: ${screenTabletMin}) {
    margin: 0 0 0 0.8em;
    width: 96%;
    height: 0;
  }
`;

const SiteMap = styled.nav`
  width: 33%;
  color: white;
  @media screen and (max-width: ${screenTabletMin}) {
    width: auto;
  }
`;

const MessageText = styled.div`
  width: 33%;
  color: white;
  margin: 26px;
  @media screen and (max-width: ${screenTabletMin}) {
    width: auto;
    text-align: center;
  }
`;
const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: blue;
  @media screen and (max-width: ${screenTabletMin}) {
    text-align: center;
  }
`;

export { FooterWrapper, FooterDecorator, SiteMap, MessageText, Copyright };
