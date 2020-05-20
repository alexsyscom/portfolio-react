import React from "react";
import PropTypes from "prop-types";
import {
  Post,
  PostDate,
  PostContent,
} from "../styled";

const getHTML = (content) => {
  return { __html: content };
};

const CreatePosts = (props) => {
  return props.posts.map((item) => {
    return (
      <Post id={"post" + item.id} key={item.id}>
        <h2>{item.title}</h2>
        <PostDate>{item.date}</PostDate>
        <PostContent dangerouslySetInnerHTML={getHTML(item.content)} />
      </Post>
    );
  });
};

CreatePosts.propTypes = {
  posts: PropTypes.array,
};

export default CreatePosts;
