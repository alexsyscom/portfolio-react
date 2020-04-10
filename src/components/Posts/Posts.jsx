import React from "react";

export default class extends React.Component {
  componentDidMount() {
    let headerHeight = document.querySelector("header").clientHeight;
    let linksItems = Array.from(document.querySelectorAll(".blog-items"));
    let postsItems = Array.from(document.querySelectorAll(".post"));
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
      });
    });
  }

  createLinks = () => {
    let links = this.props.posts.map((item) => {
      return (
        <li
          className="blog-items"
          key={item.id}
          ref={(this[`link${item.id}`] = React.createRef())}
        >
          <a href={"#post" + item.id}>{item.title}</a>
        </li>
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
        <div
          className="post"
          id={"post" + item.id}
          key={item.id}
          ref={(this[`post${item.id}`] = React.createRef())}
        >
          <h2>{item.title}</h2>
          <div className="post-date">{item.date}</div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={this.getHTML(item.content)}
          />
        </div>
      );
    });

    return posts;
  };
  render() {
    return (
      <>
        <main className="main-blog">
          <section className="main-blog__left-side">
            <aside>
              <ul className="blog-titles">{this.createLinks()}</ul>
            </aside>
          </section>
          <section className="main-blog__right-side">
            {this.createPosts()}
          </section>
        </main>
      </>
    );
  }
}
