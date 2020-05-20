import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import arrowImg from "../../assets/icons/arrow_down.png";
import ArrowWrapper from "./styled";

const Arrow = (props) => {
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    props.blog ? setLoading(true) : setLoading(false);
  }, [props.blog]);

  return !isLoading ? (
    <ArrowWrapper>
      <a href="#main" title="Scroll down to main content">
        <img src={arrowImg} alt="arrow_down" id="arrow" />
      </a>
    </ArrowWrapper>
  ) : null;
};

Arrow.propTypes = {
  blog: PropTypes.bool,
};

export default Arrow;
