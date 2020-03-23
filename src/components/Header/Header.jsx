import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Menu from "../Menu/Menu";
import Avatar from "../Avatar/Avatar";
import Arrow from "../Arrow/Arrow";

export default function() {
  return (
    <header className="header">
      <div className="header-top">
        <SocialNetworks />
        <Menu />
      </div>
      <Avatar />
      <Arrow />
    </header>
  );
}
