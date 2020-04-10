import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Menu from "../Menu/Menu";
import Avatar from "../Avatar/Avatar";
import Arrow from "../Arrow/Arrow";

export default function (props) {
  return (
    <header className={props.blog ? "header header_blog" : "header"}>
      <div className="header-top">
        <SocialNetworks />
        <Menu />
      </div>
      <Avatar {...props} />
      <Arrow {...props} />
    </header>
  );
}
