import React, { useState, useEffect } from "react";
import Caption from "../Caption/Caption";
import SoftSkills from "../SoftSkills/SoftSkills";
import Service from "../../service";

//Import styles from styled component
import {
  LeftSide,
  RightSide,
  LeftSideCaption,
  AboutMe,
  AboutMePhoto,
} from "./styled";

const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [myPhoto, setMyPhoto] = useState("");
  const [leftSideData, setLeftSideData] = useState("");
  const [rightSideData, setRightSideData] = useState("");

  useEffect(() => {
    const service = new Service();
    const myPhoto = service.getMyPhoto();
    const leftSideData = service.getLeftSideData();
    const rightSideData = service.getRightSideData();

    setLoading(false);
    setMyPhoto(myPhoto);
    setLeftSideData(leftSideData);
    setRightSideData(rightSideData);
  }, []);

  return !isLoading ? (
    <main id="main">
      <LeftSide>
        <LeftSideCaption>
          <h1>ОБО МНЕ</h1>
        </LeftSideCaption>
        <AboutMe>
          <AboutMePhoto src={myPhoto} alt="This is I am" />
          <Caption conf={leftSideData} />
        </AboutMe>
      </LeftSide>
      <RightSide>
        <Caption conf={rightSideData} />
        <SoftSkills />
      </RightSide>
    </main>
  ) : null;
};

export default Main;
