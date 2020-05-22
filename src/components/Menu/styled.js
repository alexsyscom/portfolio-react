import styled from "styled-components";
import { screenTabletMin } from "../../assets/breakpoints";
import { blueLight } from "../../assets/colors";
import { Link } from "react-router-dom";

const HeaderTopMenu = styled.div`
  padding-right: 15px;
`;
const MenuWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  display: ${(props) => (props.visible ? "block" : "none")};
  border-radius: 2px;
  top: 50px;
  right: 15px;
  width: 200px;
  height: 400px;
  background-color: white;
  opacity: 90%;
  @media screen and (max-width: ${screenTabletMin}) {
    width: 95%;
    height: auto;
  }
`;
const MenuItems = styled.li`
  width: auto;
  color: white;
  font-size: 20px;
  list-style: none;
  margin: 5px 5px;
`;
const MenuUl = styled.ul`
  margin: 0 5px;
  padding: 0;
  @media screen and (max-width: ${screenTabletMin}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const MenuLink = styled(Link)`
  color: gray;
  list-style: none;
  margin: 10px 2px 10px 2px;
  display: block;
  padding-left: 5px;
  transition: 0.3s;
  &:hover {
    background-color: ${blueLight};
    border-radius: 2px;
    color: black;
  }
`;

export { HeaderTopMenu, MenuWrapper, MenuItems, MenuUl, MenuLink };
