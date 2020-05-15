import styled from "styled-components";

const SocialNetworks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  width: auto;
  @media screen and (max-width: 719px) {
    justify-content: center;
  }
`;

const SocialNetworksItem = styled.li`
  margin: 10px;
  padding-right: 20px;
  list-style: none;
`;

export const Styled = {
  SocialNetworks,
  SocialNetworksItem,
};
