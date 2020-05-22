import React, { useState, useEffect } from "react";
import Service from "../../service";

//Import styles from styled component
import {
  HeaderTopMenu,
  MenuWrapper,
  MenuItems,
  MenuUl,
  MenuLink,
} from "./styled";

const Menu = () => {
  const [isLoading, setLoading] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [imgsrc, setImgsrc] = useState("");

  useEffect(() => {
    const service = new Service();
    const imgsrc = service.getMenuLogo();

    setLoading(false);
    setImgsrc(imgsrc);
  }, []);

  return !isLoading ? (
    <>
      <HeaderTopMenu
        onClick={() => {
          setMenuVisible(true);
        }}
      >
        <img src={imgsrc} alt="menu" />
      </HeaderTopMenu>
      <MenuWrapper
        onMouseLeave={() => {
          setMenuVisible(false);
        }}
        visible={isMenuVisible}
      >
        <nav>
          <MenuUl>
            <MenuItems>
              <MenuLink
                to="/"
                onClick={() => {
                  setMenuVisible(false);
                }}
              >
                Главная
              </MenuLink>
            </MenuItems>
            <MenuItems>
              <MenuLink
                to="/Blog"
                onClick={() => {
                  setMenuVisible(false);
                }}
              >
                Блог
              </MenuLink>
            </MenuItems>
          </MenuUl>
        </nav>
      </MenuWrapper>
    </>
  ) : null;
};

export default Menu;
