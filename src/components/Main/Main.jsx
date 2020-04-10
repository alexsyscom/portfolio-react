import React from "react";
import Caption from "../Caption/Caption";
import SoftSkills from "../SoftSkills/SoftSkills";
import Service from "../../service";

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
        <section className="left-side">
          <div className="left-side__caption">
            <h1>ОБО МНЕ</h1>
          </div>
          <div className="about-me">
            <img
              src={this.state.myPhoto}
              alt="This is I am"
              className="about-me__my-photo"
            />
            <Caption conf={this.state.leftSideData} />
          </div>
        </section>
        <section className="right-side">
          <Caption conf={this.state.rightSideData} />
          <SoftSkills />
        </section>
      </main>
    ) : null;
    return output;
  }
}
