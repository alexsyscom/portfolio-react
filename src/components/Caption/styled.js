import styled from "styled-components";

const Caption = styled.div`
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
  @media screen and (max-width: 719px) {
    padding: 10px;
  }
`;

export const Styled = {
  Caption,
  CaptionDecorator,
  Description,
};
