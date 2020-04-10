import React from "react";
import Service from "../../service";

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
      <div className="arrow">
        <a
          href="#main"
          title="Scroll down to main content"
          className="arrow__link"
        >
          <img src={this.state.imgsrc} alt="arrow_down" id="arrow" />
        </a>
      </div>
    ) : null;
    return output;
  }
}
