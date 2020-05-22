import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Service from "../../service";
import {
  AvatarSign,
  AvatarWrapper,
  AvatarPhoto,
  AvatarFullname,
} from "./styled";

const Avatar = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [imgsrc, setImageSrc] = useState("");
  const [capture, setCaptire] = useState("");
  const [sign, setSign] = useState("");

  useEffect(() => {
    const service = new Service();
    const myPhoto = service.getMyPhoto();
    let capture;
    let sign;
    if (props.blog) {
      capture = service.getBlogCapture();
      sign = service.getBlogSign();
    } else {
      capture = service.getAboutCapture();
      sign = service.getAboutSign();
    }

    setLoading(false);
    setImageSrc(myPhoto);
    setCaptire(capture);
    setSign(sign);
  }, [props.blog]);

  return !isLoading ? (
    <AvatarWrapper>
      <AvatarPhoto src={imgsrc} alt="me" />
      <AvatarSign>
        <AvatarFullname>{capture}</AvatarFullname>
        {sign}
      </AvatarSign>
    </AvatarWrapper>
  ) : null;
};

Avatar.propTypes = {
  blog: PropTypes.bool,
};

export default Avatar;
