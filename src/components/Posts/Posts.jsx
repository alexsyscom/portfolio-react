import React from "react";
import CreateLinks from "./CreateLinks/CreateLinks";
import CreatePosts from "./CreatePosts/CreatePosts";

import {
  MainBlog,
  MainBlogLiftSide,
  MainBlogRightSide,
  BlogTitles,
} from "./styled";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transformedProps: this.props.posts,
    };
  }
  static displayName = "Posts";

  scrollHandler = () => {
    let scrollYOffset = window.pageYOffset;

    const temp = this.state.transformedProps.map((item) => {
      item.isActive = scrollYOffset >= item.start && scrollYOffset < item.end;
      return item;
    });
    this.setState({ transformedProps: temp });
  };

  componentDidMount() {
    let headerHeight = document.querySelector("#root > div:first-child")
      .clientHeight;
    let postsItems = Array.from(document.querySelectorAll("[id^=post]"));
    let posts = this.state.transformedProps;

    posts.reduce((prevValue, item, index) => {
      item.start = prevValue;
      item.end = prevValue + postsItems[index].clientHeight;
      item.isActive = false;
      return prevValue + postsItems[index].clientHeight;
    }, headerHeight);
    this.setState({ transformedProps: posts });
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    return (
      <>
        <MainBlog>
          <MainBlogLiftSide>
            <aside>
              <BlogTitles>
                <CreateLinks posts={this.state.transformedProps} />
              </BlogTitles>
            </aside>
          </MainBlogLiftSide>
          <MainBlogRightSide>
            <CreatePosts posts={this.props.posts} />
          </MainBlogRightSide>
        </MainBlog>
      </>
    );
  }
}
