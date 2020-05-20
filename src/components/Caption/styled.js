import styled from "styled-components";
import { screenTabletMin } from "../../assets/breakpoints"


const CaptionWrapper = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CaptionDecorator = styled.div`
  width: 50%;
  border-top: 3px solid gray;
  margin-bottom: 20px;
`;
const Description = styled.div`
  padding: 5px;
  margin-bottom: 20px;
  @media screen and (max-width: ${screenTabletMin}) {
    padding: 10px;
  }
`;

export {
  CaptionWrapper,
  CaptionDecorator,
  Description
};
