import React from "react";
import Service from "../../service";

//Import styles from styled component
import { Styled } from "./styled";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contacts: [],
    };
  }

  static displayName = "Contacts";

  componentDidMount() {
    const service = new Service();
    const contacts = service.getContacts();
    this.setState({ isLoading: false, contacts: contacts });
  }

  render() {
    const contactsList = !this.state.isLoading
      ? this.state.contacts.map((item, index) => {
          return (
            <Styled.ContactsItemsItem key={index} footer={this.props.footer}>
              <Styled.ContactsItemsItemImage
                src={item.img}
                alt={item.alt}
                footer={this.props.footer}
              />
              <Styled.ContactsItemsItemLink
                href={item.link}
                footer={this.props.footer}
              >
                {item.title}
              </Styled.ContactsItemsItemLink>
            </Styled.ContactsItemsItem>
          );
        })
      : null;

    return (
      <Styled.Contacts footer={this.props.footer}>
        {this.props.title && (
          <>
            <Styled.Caption>
              <h2>{this.props.title}</h2>
              <Styled.CaptionDecorator />
            </Styled.Caption>
          </>
        )}
        <Styled.ContactsItems footer={this.props.footer}>
          {contactsList}
        </Styled.ContactsItems>
      </Styled.Contacts>
    );
  }
}
