import React from "react";
import PropTypes from "prop-types";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Menu from "../Menu/Menu";
import Arrow from "../Arrow/Arrow";
import Avatar from "../Avatar/Avatar";

//Import styles from styled component
import { HeaderWrapper, HeaderTop } from "./styled";

const Header = (props) => {
  return (
    <HeaderWrapper blog={props.blog ? true : false}>
      <HeaderTop>
        <SocialNetworks />
        <Menu />
      </HeaderTop>
      <Avatar {...props} />
      <Arrow {...props} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  blog: PropTypes.bool,
};

export default Header;
