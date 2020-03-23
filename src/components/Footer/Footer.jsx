import React from "react";
import Sitemap from "../Sitemap/Sitemap";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Contacts from "../Contacts/Contacts";
import {
  FooterWrapper,
  FooterLeft,
  FooterDecorator,
  FooterSidemap,
  Copyright
} from "../../assets/styled-components/style";

export default function() {
  return (
    <footer>
      {/* <div className="footer"> */}
      <FooterWrapper>
        {/* <div className="some-text"> */}
        <FooterLeft>
          Этот сайт я делал в рамках самостоятельного обучения
        </FooterLeft>
        {/* </div> */}
        {/* <div className="footer-decorator"></div> */}
        <FooterDecorator />
        {/* <nav className="site-map"> */}
        <FooterSidemap>
          <Sitemap />
          <SocialNetworks />
        </FooterSidemap>
        {/* </nav> */}
        {/* <div className="footer-decorator"></div> */}
        <FooterDecorator />
        <Contacts
          contactsModificator="contacts_footer"
          itemsModificator="contacts-items_footer"
          itemImageModificator="contacts-items__item__image contacts-items__item__image_hidden"
          itemLinkModificator="contacts-items__item__link contacts-items__item__link_white"
        />
      </FooterWrapper>
      {/* </div> */}
      {/* <div className="copyright"> */}
      <Copyright>&#169; Игнатов Александр | Создано с любовью | 2020</Copyright>
      {/* </div> */}
    </footer>
  );
}
