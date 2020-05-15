import React from "react";
import Service from "../../service";

//Import styles from styled component
import { Styled } from "./styled";

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
      <Styled.Avatar>
        <Styled.AvatarPhoto src={this.state.imgsrc} alt="me" />
        <Styled.AvatarSign>
          <Styled.AvatarFullname>{this.state.capture}</Styled.AvatarFullname>
          {this.state.sign}
        </Styled.AvatarSign>
      </Styled.Avatar>
    ) : null;
    return output;
  }
}
