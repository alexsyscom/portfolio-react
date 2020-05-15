import React, { useEffect } from "react";
//Import styles from styled component
import { Styled } from "./styled";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Styled.MapSection>
        <Contacts title="КОНТАКТЫ" />
        <Footer />
      </Styled.MapSection>
    </>
  );
}
