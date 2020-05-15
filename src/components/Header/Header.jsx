import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Menu from "../Menu/Menu";
import Avatar from "../Avatar/Avatar";
import Arrow from "../Arrow/Arrow";

//Import styles from styled component
import { Styled } from "./styled";

export default function (props) {
  return (
    <Styled.Header blog={props.blog ? true : false} id="header">
      <Styled.HeaderTop>
        <SocialNetworks />
        <Menu />
      </Styled.HeaderTop>
      <Avatar {...props} />
      <Arrow {...props} />
    </Styled.Header>
  );
}
