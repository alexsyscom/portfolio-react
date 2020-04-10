import React from "react";
import Service from "../../service";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imgsrc: "",
      capture: "",
      sign: "",
    };
  }
  static displayName = "Avatar component";

  componentDidMount() {
    const service = new Service();
    const myPhoto = service.getMyPhoto();
    let capture;
    let sign;
    if (this.props.blog) {
      capture = service.getBlogCapture();
      sign = service.getBlogSign();
    } else {
      capture = service.getAboutCapture();
      sign = service.getAboutSign();
    }

    this.setState({
      isLoading: false,
      imgsrc: myPhoto,
      capture: capture,
      sign: sign,
    });
  }

  render() {
    const output = !this.state.isLoading ? (
      <div className="avatar">
        <img src={this.state.imgsrc} alt="me" className="avatar__photo" />
        <div className="avatar__sign">
          <span className="avatar__fullname">{this.state.capture}</span>
          {this.state.sign}
        </div>
      </div>
    ) : null;
    return output;
  }
}
