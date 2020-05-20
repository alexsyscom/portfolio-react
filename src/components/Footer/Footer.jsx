import React from "react";
import Sitemap from "../Sitemap/Sitemap";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Contacts from "../Contacts/Contacts";

//Import styles from styled component
import {
  FooterWrapper,
  FooterDecorator,
  SiteMap,
  MessageText,
  Copyright,
} from "./styled";

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <MessageText>
          Этот сайт я делал в рамках самостоятельного обучения
        </MessageText>
        <FooterDecorator />
        <SiteMap>
          <Sitemap />
          <SocialNetworks />
        </SiteMap>
        <FooterDecorator />
        <Contacts footer />
      </FooterWrapper>
      <Copyright>&#169; Игнатов Александр | Создано с любовью | 2020</Copyright>
    </footer>
  );
};

export default Footer;
