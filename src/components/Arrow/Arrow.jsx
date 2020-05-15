import React from "react";
import Service from "../../service";

//Import styles from styled component
import { Styled } from "./styled";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      imgsrc: "",
    };
  }

  componentDidMount() {
    const service = new Service();
    const data = service.getArrowImage();
    this.props.blog
      ? this.setState({ isLoading: true })
      : this.setState({ isLoading: false, imgsrc: data });
  }

  render() {
    const output = !this.state.isLoading ? (
      <Styled.Arrow>
        <a href="#main" title="Scroll down to main content">
          <img src={this.state.imgsrc} alt="arrow_down" id="arrow" />
        </a>
      </Styled.Arrow>
    ) : null;
    return output;
  }
}
