import React from "react";

import { Styled } from "./styled";

export default class extends React.Component {
  componentDidMount() {
    let headerHeight = document.querySelector("#header").clientHeight;
    let linksItems = Array.from(document.querySelectorAll("[id^=link]"));
    let postsItems = Array.from(document.querySelectorAll("[id^=post]"));
    let posts = this.props.posts;
    posts.reduce((prevValue, item, index) => {
      item.start = prevValue;
      item.end = prevValue + postsItems[index].clientHeight;
      return prevValue + postsItems[index].clientHeight;
    }, headerHeight);
    window.addEventListener("scroll", () => {
      let scrollYOffset = window.pageYOffset;
      posts.map((item, index) => {
        if (scrollYOffset >= item.start && scrollYOffset < item.end) {
          if (!linksItems[index].classList.contains("active")) {
            linksItems[index].classList.toggle("active");
          }
        } else {
          if (linksItems[index].classList.contains("active")) {
            linksItems[index].classList.toggle("active");
          }
        }
        return null;
      });
    });
  }

  createLinks = () => {
    let links = this.props.posts.map((item) => {
      return (
        <Styled.BlogItems key={item.id} id={"link" + item.id}>
          <Styled.BlogItemsLink href={"#post" + item.id}>
            {item.title}
          </Styled.BlogItemsLink>
        </Styled.BlogItems>
      );
    });

    return links;
  };
  getHTML = (content) => {
    return { __html: content };
  };

  createPosts = () => {
    let posts = this.props.posts.map((item) => {
      return (
        <Styled.Post id={"post" + item.id} key={item.id}>
          <h2>{item.title}</h2>
          <Styled.PostDate>{item.date}</Styled.PostDate>
          <Styled.PostContent
            dangerouslySetInnerHTML={this.getHTML(item.content)}
          />
        </Styled.Post>
      );
    });

    return posts;
  };
  render() {
    return (
      <>
        <Styled.MainBlog>
          <Styled.MainBlogLiftSide>
            <aside>
              <Styled.BlogTitles>{this.createLinks()}</Styled.BlogTitles>
            </aside>
          </Styled.MainBlogLiftSide>
          <Styled.MainBlogRightSide>
            {this.createPosts()}
          </Styled.MainBlogRightSide>
        </Styled.MainBlog>
      </>
    );
  }
}
