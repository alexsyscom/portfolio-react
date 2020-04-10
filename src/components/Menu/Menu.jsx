import React from "react";
// import { Link } from "react-router-dom";
import Service from "../../service";
import {
  Menu,
  MenuItems,
  StyledLink,
  StyledUl,
  HeaderTopMenu,
} from "../../styled-components/styled";

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
        <HeaderTopMenu onClick={this.handlerMouseEnter}>
          <img src={this.state.imgsrc} alt="menu" />
        </HeaderTopMenu>
        <Menu
          onMouseLeave={this.handlerMouseLeave}
          visible={this.state.isMenuVisible}
        >
          <nav>
            <StyledUl>
              <MenuItems>
                <StyledLink to="/" onClick={this.handlerMouseLeave}>
                  Главная
                </StyledLink>
              </MenuItems>
              <MenuItems>
                <StyledLink to="/Blog" onClick={this.handlerMouseLeave}>
                  Блог
                </StyledLink>
              </MenuItems>
            </StyledUl>
          </nav>
        </Menu>
      </>
    ) : null;
    return output;
  }
}
