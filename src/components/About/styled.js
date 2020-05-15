import styled from "styled-components";
import mapImg from "../../assets/icons/map.png"

const MapSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${mapImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
`;

export const Styled = {
    MapSection
  };