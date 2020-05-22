import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Service from "../../service";
import {
  Caption,
  CaptionDecorator,
  ContactsWrapper,
  ContactsItems,
  ContactsItemsItem,
  ContactsItemsItemLink,
  ContactsItemsItemImage,
} from "./styled";

const Contacts = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const service = new Service();
    const contacts = service.getContacts();
    setLoading(false);
    setContacts(contacts);
  }, []);
  const contactsList = !isLoading
    ? contacts.map((item, index) => {
        return (
          <ContactsItemsItem key={index} footer={props.footer}>
            <ContactsItemsItemImage
              src={item.img}
              alt={item.alt}
              footer={props.footer}
            />
            <ContactsItemsItemLink href={item.link} footer={props.footer}>
              {item.title}
            </ContactsItemsItemLink>
          </ContactsItemsItem>
        );
      })
    : null;

  return (
    <ContactsWrapper footer={props.footer}>
      {props.title && (
        <>
          <Caption>
            <h2>{props.title}</h2>
            <CaptionDecorator />
          </Caption>
        </>
      )}
      <ContactsItems footer={props.footer}>{contactsList}</ContactsItems>
    </ContactsWrapper>
  );
};

Contacts.propTypes = {
  footer: PropTypes.bool,
};

export default Contacts;
