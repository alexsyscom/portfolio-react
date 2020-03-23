import React from "react";

//Import Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

export default function() {
  return (
    <>
      <Header />
      <Main />
      <section className="map">
        <Contacts title="КОНТАКТЫ" />
        <Footer />
      </section>
    </>
  );
}
