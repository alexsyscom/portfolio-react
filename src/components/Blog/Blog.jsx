import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Posts from "../Posts/Posts";
import Service from "../../service";

const Blog = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    const service = new Service();
    const posts = service.getPosts();
    setLoading(false);
    setData(posts);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header blog />
      {!isLoading ? <Posts posts={data} /> : null}
      <Footer />
    </>
  );
};
export default Blog;
