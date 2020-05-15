import styled from "styled-components";
import avatarBack from "../../assets/icons/stars.png";

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url(${avatarBack}) no-repeat center;
  height: 330px;
  color: white;
  @media screen and (max-width: 719px) {
    background-size: contain;
  }
`;
const AvatarPhoto = styled.img`
  margin-top: 60px;
  margin-bottom: 20px;
  height: 130px;
  border-radius: 600px;
`;
const AvatarSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const AvatarFullname = styled.span`
  font-size: 31px;
  font-weight: bold;
`;

export const Styled = {
  Avatar,
  AvatarPhoto,
  AvatarSign,
  AvatarFullname,
};
