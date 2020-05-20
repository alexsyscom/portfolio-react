import styled from "styled-components";
import { screenDesktopMin } from "../../assets/breakpoints";
import { grayHighLight, blueDark } from "../../assets/colors";

const MainBlog = styled.main`
  background-color: ${grayHighLight};
`;

const MainBlogLiftSide = styled.section`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 0;
  @media screen and (max-width: ${screenDesktopMin}) {
    display: none;
  }
`;
const MainBlogRightSide = styled.section`
  width: 70%;
  height: 100%;
  padding-left: 40px;
  @media screen and (max-width: ${screenDesktopMin}) {
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
    border-right: 3px solid ${blueDark};
  }
  /* &.active > a {
    color: ${blueDark};
  } */
`;
const BlogItemsActive = styled(BlogItems)`
    color: ${blueDark};
    font-weight: bold;
    border-right: 3px solid ${blueDark};
`;
const BlogItemsLink = styled.a`
  color: black;
  &:hover {
    color: ${blueDark};
    font-weight: bold;
  }
`;
const BlogItemsLinkActive = styled(BlogItemsLink)`
  color: ${blueDark};
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

export {
  MainBlog,
  MainBlogLiftSide,
  MainBlogRightSide,
  BlogTitles,
  BlogItems,
  BlogItemsActive,
  BlogItemsLink,
  BlogItemsLinkActive,
  Post,
  PostDate,
  PostContent,
};
