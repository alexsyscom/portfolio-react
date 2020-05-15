import React from "react";
import Caption from "../Caption/Caption";
import SoftSkills from "../SoftSkills/SoftSkills";
import Service from "../../service";

//Import styles from styled component
import { Styled } from "./styled";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      myPhoto: "",
      leftSideData: "",
      rightSideData: "",
    };
  }
  componentDidMount() {
    const service = new Service();
    const myPhoto = service.getMyPhoto();
    const leftSideData = service.getLeftSideData();
    const rightSideData = service.getRightSideData();
    this.setState({
      isLoading: false,
      myPhoto: myPhoto,
      leftSideData: leftSideData,
      rightSideData: rightSideData,
    });
  }

  render() {
    let output = !this.state.isLoading ? (
      <main id="main">
        <Styled.LeftSide>
          <Styled.LeftSideCaption>
            <h1>ОБО МНЕ</h1>
          </Styled.LeftSideCaption>
          <Styled.AboutMe>
            <Styled.AboutMePhoto src={this.state.myPhoto} alt="This is I am" />
            <Caption conf={this.state.leftSideData} />
          </Styled.AboutMe>
        </Styled.LeftSide>
        <Styled.RightSide>
          <Caption conf={this.state.rightSideData} />
          <SoftSkills />
        </Styled.RightSide>
      </main>
    ) : null;
    return output;
  }
}
