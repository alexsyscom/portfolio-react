import React from "react";
import PropTypes from "prop-types";
import {
  BlogItems,
  BlogItemsLink,
  BlogItemsActive,
  BlogItemsLinkActive,
} from "../styled";

const CreateLinks = (props) =>
  props.posts.map((item) => {
    return item.isActive ? (
      <BlogItemsActive key={item.id} id={"link" + item.id}>
        <BlogItemsLinkActive href={"#post" + item.id}>
          {item.title}
        </BlogItemsLinkActive>
      </BlogItemsActive>
    ) : (
      <BlogItems key={item.id} id={"link" + item.id}>
        <BlogItemsLink href={"#post" + item.id}>{item.title}</BlogItemsLink>
      </BlogItems>
    );
  });

CreateLinks.propTypes = {
  posts: PropTypes.array,
};

export default CreateLinks;
