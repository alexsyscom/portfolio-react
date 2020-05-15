import styled from "styled-components";

const MainBlog = styled.main`
  background-color: #faf8f1;
`;

const MainBlogLiftSide = styled.section`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 0;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const MainBlogRightSide = styled.section`
  width: 70%;
  height: 100%;
  padding-left: 40px;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding-left: 20px;
  }
`;
const BlogTitles = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
`;
const BlogItems = styled.li`
  list-style: none;
  border-right: 3px solid transparent;
  width: 260px;
  text-align: right;
  margin: 10px 0;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    border-right: 3px solid #083c96;
  }
  &.active {
    color: #083c96;
    font-weight: bold;
    border-right: 3px solid #083c96;
  }
  &.active > a {
    color: #083c96;
  }
`;
const BlogItemsLink = styled.a`
  /* text-decoration: none; */
  color: black;
  &:hover {
    color: #083c96;
    font-weight: bold;
  }
`;
const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > h2 {
    text-align: left;
    margin: 20px 20px 18px 0;
    font-weight: 500;
  }
`;
const PostDate = styled.div`
  color: grey;
  margin-bottom: 20px;
`;
const PostContent = styled.div`
  margin: 0 20px 40px 0;
  padding-bottom: 20px;
  border-bottom: 4px solid lightgrey;
`;

export const Styled = {
  MainBlog,
  MainBlogLiftSide,
  MainBlogRightSide,
  BlogTitles,
  BlogItems,
  BlogItemsLink,
  Post,
  PostDate,
  PostContent,
};
