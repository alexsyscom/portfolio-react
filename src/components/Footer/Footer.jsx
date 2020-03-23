import React from "react";
import Sitemap from "../Sitemap/Sitemap";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Contacts from "../Contacts/Contacts";

export default function() {
  return (
    <footer>
      <div className="footer">
        <div className="some-text">
          Этот сайт я делал в рамках самостоятельного обучения
        </div>
        <div className="footer-decorator"></div>
        <nav className="site-map">
          <Sitemap />
          <SocialNetworks />
        </nav>
        <div className="footer-decorator"></div>
        <Contacts
          contactsModificator="contacts_footer"
          itemsModificator="contacts-items_footer"
          itemImageModificator="contacts-items__item__image contacts-items__item__image_hidden"
          itemLinkModificator="contacts-items__item__link contacts-items__item__link_white"
        />
      </div>
      <div className="copyright">
        &#169; Игнатов Александр | Создано с любовью | 2020
      </div>
    </footer>
  );
}
