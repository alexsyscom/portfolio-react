import * as dictionary from "./data/dictionary";
export default class {
  getMyPhoto() {
    return JSON.parse(dictionary.MY_PHOTO);
  }
  getArrowImage() {
    return JSON.parse(dictionary.ARROW_DOWN);
  }
  getMenuLogo() {
    return JSON.parse(dictionary.MENU_HUMBURGER);
  }

  getAboutCapture() {
    return JSON.parse(dictionary.ABOUT_CAPTURE);
  }

  getAboutSign() {
    return JSON.parse(dictionary.ABOUT_SIGN);
  }
  getBlogCapture() {
    return JSON.parse(dictionary.BLOG_CAPTURE);
  }

  getBlogSign() {
    return JSON.parse(dictionary.BLOG_SIGN);
  }

  getSocialList() {
    return JSON.parse(dictionary.SOCIAL_LIST);
  }

  getLeftSideData() {
    return JSON.parse(dictionary.LEFT_SIDE);
  }
  getRightSideData() {
    return JSON.parse(dictionary.RIGTH_SIDE);
  }
  getSoftSkills() {
    return JSON.parse(dictionary.SOFTSKILLS);
  }

  getContacts() {
    return JSON.parse(dictionary.CONTACTS);
  }
  getSitemap() {
    return JSON.parse(dictionary.SITEMAP);
  }
  getPosts(){
    return JSON.parse(dictionary.POSTS);
  }
}
