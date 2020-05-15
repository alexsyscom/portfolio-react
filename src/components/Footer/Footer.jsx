import React from "react";
import Sitemap from "../Sitemap/Sitemap";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import Contacts from "../Contacts/Contacts";

//Import styles from styled component
import { Styled } from "./styled";

export default function () {
  return (
    <footer>
      <Styled.Footer>
        <Styled.MessageText>
          Этот сайт я делал в рамках самостоятельного обучения
        </Styled.MessageText>
        <Styled.FooterDecorator />
        <Styled.SiteMap>
          <Sitemap />
          <SocialNetworks />
        </Styled.SiteMap>
        <Styled.FooterDecorator />
        <Contacts footer />
      </Styled.Footer>
      <Styled.Copyright>
        &#169; Игнатов Александр | Создано с любовью | 2020
      </Styled.Copyright>
    </footer>
  );
}
