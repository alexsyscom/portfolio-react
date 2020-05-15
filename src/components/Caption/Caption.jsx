import React from "react";

//Import styles from styled component
import { Styled } from "./styled";

export default function (props) {
  return (
    <>
      <Styled.Caption>
        <h2>{props.conf.title}</h2>
        <Styled.CaptionDecorator />
      </Styled.Caption>
      <Styled.Description>{props.conf.description}</Styled.Description>
    </>
  );
}
