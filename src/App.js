import React from "react";
import Router from "./components/Router/Router";
import {GlobalStyle} from "./assets/globalStyled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
