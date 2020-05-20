import styled from "styled-components";
import { screenTabletMin } from "../../assets/breakpoints";

const SocialNetworksWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  width: auto;
  @media screen and (max-width: ${screenTabletMin}) {
    justify-content: center;
  }
`;

const SocialNetworksItem = styled.li`
  margin: 10px;
  padding-right: 20px;
  list-style: none;
`;

export {
  SocialNetworksWrapper,
  SocialNetworksItem,
};
