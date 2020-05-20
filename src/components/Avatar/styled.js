import styled from "styled-components";
import avatarBg from "../../assets/icons/stars.png";
import { screenTabletMin } from "../../assets/breakpoints";

const AvatarSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const AvatarWrapper = styled(AvatarSign)`
  background: url(${avatarBg}) no-repeat center;
  height: 330px;
  color: white;
  @media screen and (max-width: ${screenTabletMin}) {
    background-size: contain;
  }
`;
const AvatarPhoto = styled.img`
  margin-top: 60px;
  margin-bottom: 20px;
  height: 130px;
  border-radius: 600px;
`;
const AvatarFullname = styled.span`
  font-size: 31px;
  font-weight: bold;
`;

export { AvatarSign, AvatarWrapper, AvatarPhoto, AvatarFullname };
