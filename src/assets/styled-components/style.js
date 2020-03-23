import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
`;

export const FooterSidemap = styled.div`
  width: 33%;
  color: white;
`;

export const FooterLeft = styled(FooterSidemap)`
  margin: 26px;
`;
export const FooterDecorator = styled.div`
  border: 1px solid gray;
  margin: 10px;
`;
export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: blue;
`;
