import React from "react";
import { Link } from "react-router-dom";
import Service from "../../service";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      siteMapData: "",
    };
  }
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
            <li className="site-map__items__item" key={index.toString()}>
              <Link to={item.link} style={{ color: "white" }}>
                {item.title}
              </Link>
            </li>
          );
        })
      : null;
    return <ul className="site-map__items">{siteMapList}</ul>;
  }
}
