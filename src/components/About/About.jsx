import React, { useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import Map from "./styled"



const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Map>
        <Contacts title="КОНТАКТЫ" />
        <Footer />
      </Map>
    </>
  );
}

export default About;