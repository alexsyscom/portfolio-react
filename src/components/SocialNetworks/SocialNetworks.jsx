import React from "react";
import Service from "../../service";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
    };
  }
  static displayName = "SocialNetworks";

  componentDidMount = () => {
    const service = new Service();
    const data = service.getSocialList();
    this.setState({
      isLoading: false,
      data: data,
    });
  };

  render() {
    const buttonsList = !this.state.isLoading
      ? this.state.data.map((item) => {
          return (
            <li className="social-networks__item" key={item.id.toString()}>
              <a href={item.link}>
                <img src={item.img} alt={item.alt} />
              </a>
            </li>
          );
        })
      : null;
    return <ul className="social-networks">{buttonsList}</ul>;
  }
}
