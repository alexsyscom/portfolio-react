import React from "react";
import Service from "../../service";

//Import styles from styled component
import { Styled } from "./styled";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isMenuVisible: false,
      imgsrc: "",
    };
  }

  componentDidMount() {
    const service = new Service();
    const imgsrc = service.getMenuLogo();
    this.setState({
      isLoading: false,
      imgsrc: imgsrc,
    });
  }

  handlerMouseEnter = () => this.setState({ isMenuVisible: true });

  handlerMouseLeave = () => this.setState({ isMenuVisible: false });

  render() {
    const output = !this.state.isLoading ? (
      <>
        <Styled.HeaderTopMenu onClick={this.handlerMouseEnter}>
          <img src={this.state.imgsrc} alt="menu" />
        </Styled.HeaderTopMenu>
        <Styled.Menu
          onMouseLeave={this.handlerMouseLeave}
          visible={this.state.isMenuVisible}
        >
          <nav>
            <Styled.MenuUl>
              <Styled.MenuItems>
                <Styled.MenuLink to="/" onClick={this.handlerMouseLeave}>
                  Главная
                </Styled.MenuLink>
              </Styled.MenuItems>
              <Styled.MenuItems>
                <Styled.MenuLink to="/Blog" onClick={this.handlerMouseLeave}>
                  Блог
                </Styled.MenuLink>
              </Styled.MenuItems>
            </Styled.MenuUl>
          </nav>
        </Styled.Menu>
      </>
    ) : null;
    return output;
  }
}
