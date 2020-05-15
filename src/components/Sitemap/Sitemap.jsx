import React from "react";
// import { Link } from "react-router-dom";
import Service from "../../service";

import { Styled } from "./styled";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      siteMapData: "",
    };
  }
  static displayName = "Sitemap";

  componentDidMount() {
    const service = new Service();
    const siteMapData = service.getSitemap();
    this.setState({
      isLoading: false,
      siteMapData: siteMapData,
    });
  }
  render() {
    const siteMapList = !this.state.isLoading
      ? this.state.siteMapData.map((item, index) => {
          return (
            <Styled.SiteMapItemsItem key={index.toString()}>
              <Styled.WhiteLink to={item.link}>{item.title}</Styled.WhiteLink>
            </Styled.SiteMapItemsItem>
          );
        })
      : null;
    return <Styled.SiteMapItems>{siteMapList}</Styled.SiteMapItems>;
  }
}
