import React from "react";
import Service from "../../service";

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
            <div
              className={
                this.props.itemsModificator
                  ? "contacts-items__item " + this.props.itemsModificator
                  : "contacts-items__item"
              }
              key={index}
            >
              <img
                src={item.img}
                alt={item.alt}
                className={this.props.itemImageModificator}
              />
              <a
                href={item.link}
                className={
                  this.props.itemLinkModificator
                    ? "contacts-items__item__link " +
                      this.props.itemLinkModificator
                    : "contacts-items__item__link"
                }
              >
                {item.title}
              </a>
            </div>
          );
        })
      : null;

    return (
      <div
        className={
          this.props.contactsModificator
            ? "contacts " + this.props.contactsModificator
            : "contacts"
        }
      >
        {this.props.title && (
          <>
            <div className="caption">
              <h2 className="caption__title">{this.props.title}</h2>
              <div className="caption__decorator"></div>
            </div>
          </>
        )}
        <div
          className={
            this.props.itemsModificator
              ? "contacts-items " + this.props.itemsModificator
              : "contacts-items"
          }
        >
          {contactsList}
        </div>
      </div>
    );
  }
}
