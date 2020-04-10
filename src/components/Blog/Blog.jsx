import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Posts from "../Posts/Posts";
import Service from "../../service";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: "",
    };
  }
  componentDidMount() {
    const service = new Service();
    const posts = service.getPosts();
    this.setState({
      isLoading: false,
      data: posts,
    });
  }

  render() {
    return (
      <>
        <Header blog />
        {!this.state.isLoading ? <Posts posts={this.state.data} /> : null}
        <Footer />
      </>
    );
  }
}
