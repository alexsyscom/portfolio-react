import React from "react";
import Service from "../../service";

import { Styled } from "./styled";

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
            <Styled.SocialNetworksItem key={item.id.toString()}>
              <a href={item.link}>
                <img src={item.img} alt={item.alt} />
              </a>
            </Styled.SocialNetworksItem>
          );
        })
      : null;
    return <Styled.SocialNetworks>{buttonsList}</Styled.SocialNetworks>;
  }
}
