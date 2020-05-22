import styled from "styled-components";
import { screenTabletMin,screenDesktopMin } from "../../assets/breakpoints";
import { Link } from "react-router-dom";

const SiteMapItems = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-inline-start: 5px;
  @media screen and (max-width: ${screenTabletMin}) {
    justify-content: center;
  }
`;

const SiteMapItemsItem = styled.li`
  margin: 10px;
  padding-right: 20px;
  list-style: none;
  @media screen and (min-width: ${screenTabletMin}) and (max-width: ${screenDesktopMin}) {
    justify-content: center;
  }
`;

const WhiteLink = styled(Link)`
  color: white;
`;

export {
  SiteMapItems,
  SiteMapItemsItem,
  WhiteLink
};
