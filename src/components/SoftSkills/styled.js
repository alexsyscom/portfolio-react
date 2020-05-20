import styled from "styled-components";
import { screenTabletMin, screenDesktopMin } from "../../assets/breakpoints";

const Title = styled.h3`
  margin-left: 10px;
  align-self: flex-start;
  @media screen and (max-width: ${screenTabletMin}) {
    align-self: center;
  }
`;

const SoftSkillsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: ${screenDesktopMin}) {
    justify-content: center;
  }
`;
const SoftSkillsPersentage = styled.text`
  fill: black;
  font-size: 0.3em;
  text-anchor: middle;
`;
const SoftSkillsCircularChart = styled.svg`
  display: block;
  width: 150px;
  height: 159px;
  padding-left: 20px;
  margin: auto auto;
  max-width: 200px;
  max-height: 200px;
`;
const SoftSkillsCircle = styled.path`
  fill: none;
  stroke-width: 6;
  stroke: #1056d1;
  transform-origin: 50% 50%;
`;
const SoftSkillsCircalBg = styled.path`
  fill: none;
  stroke: #dfdcd5;
  stroke-width: 6;
`;

export {
  Title,
  SoftSkillsWrapper,
  SoftSkillsPersentage,
  SoftSkillsCircularChart,
  SoftSkillsCircle,
  SoftSkillsCircalBg,
};
