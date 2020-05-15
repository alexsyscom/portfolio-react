import styled from "styled-components";

const Caption = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CaptionDecorator = styled.div`
  width: 50%;
  border-top: 3px solid gray;
  margin-bottom: 20px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.footer ? "30px" : "70px"};
  width: ${props => props.footer ? "min-content" : "480px"};
  background-color: ${props => props.footer ? "black" : "white"};
  opacity: ${props => props.footer ? 1 : 0.7};
  @media screen and (max-width: 719px) {
    margin: 0;
    width: auto;
  }
  
`;
const ContactsItems = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 719px) {
    justify-content: ${props => props.footer ? "center":"space-around"} ;
  }
`;
const ContactsItemsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 220px;
  padding: ${props => props.footer ? "0 0 20px" : "0 0 10px"};
  margin: 0 10px;
  @media screen and (max-width: 719px) {
    padding: ${props => props.footer ? "10px 20px" : "0 0 10px"};
    width: ${props => props.footer ? "fit-content" : "220px"};
  }

`;
const ContactsItemsItemLink = styled.a`
  margin: 0 10px;
  color: ${props => props.footer ? "white": "black"};
`;
const ContactsItemsItemImage = styled.img`
  display: ${props => props.footer ? "none": "block"};
`;

export const Styled = {
  Contacts,
  ContactsItems,
  ContactsItemsItem,
  ContactsItemsItemLink,
  ContactsItemsItemImage,
  Caption,
  CaptionDecorator
};