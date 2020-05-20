import React from "react";
import PropTypes from "prop-types";
import { CaptionWrapper, CaptionDecorator, Description } from "./styled";

const Caption = (props) => {
  return (
    <>
      <CaptionWrapper>
        <h2>{props.conf.title}</h2>
        <CaptionDecorator />
      </CaptionWrapper>
      <Description>{props.conf.description}</Description>
    </>
  );
};

Caption.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Caption;
