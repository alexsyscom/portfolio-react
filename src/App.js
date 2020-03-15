import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Import Components

import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Menu from "./components/Menu";
import SocialNetworks from "./components/SocialNetworks";
import Avatar from './components/Avatar';
import Arrow from './components/Arrow';
import Blog from './components/Blog';
import Caption from './components/Caption';
import SoftSkill from './components/SoftSkill';
import Contacts from './components/Contacts';
import Sitemap from './components/Sitemap';

//Import images
import VkLogo from "../src/icons/vk.png";
import GithubLogo from "../src/icons/github.png";
import InLogo from "../src/icons/in.png";
import myPhoto from './photo/my-photo.png';
import skypeLogo from './icons/skype_n.png';
import phoneLogo from './icons/phone_n.png';
import emailLogo from './icons/email_n.png';
import locationLogo from './icons/map_n.png';


// Settings for Components

const socialList = [
  { id: 1,
   link: "https://vk.com/id51353349",
   img: VkLogo,
   alt: "vk"
 },
 { id: 2,
   link: "https://github.com/alexsyscom",
   img: GithubLogo,
   alt: "github"
 },
 { id: 3,
   link: "#",
   img: InLogo,
   alt: "in"
 },
 
];
const avatarSetting = {
  photo: myPhoto,
  fullname: "Александр Игнатов",
  description: "Личный сайт веб разработчика"
}
const leftSide ={
  title: 'КТО Я',
  description: `
  Я веб разработчик из Рязани. Мне 35 лет. Я занимаюсь разработкой
  современных сайтов и приложений. Мне нравится делать интересные и
  современные проекты. Этот сайт я сделал в рамках самостоятельного
  обучения. Чуть позже я освежу в нём свой контент. А пока посмотрите,
  как тут всё классно и красиво!`
}
const rightSide ={
  title: 'ЧЕМ Я МОГУ БЫТЬ ВАМ ПОЛЕЗЕН',
  description: `
    Больше всего меня привлекает Frontend разработка, но я также знаком и
    могу решать не сложные задачи на Backend. Но давайте по порядку.
  `
}

const frontendConfArr = [
  "Frontend",
  {
    title: "HTML",
    persentage: 90
  },
  {
    title: "CSS",
    persentage: 80
  },
  {
    title: "JavaScript",
    persentage: 80
  }
];
const backendConfArr = [
  "Backend",
  {
    title: "PHP",
    persentage: 40
  },
  {
    title: "mySQL",
    persentage: 55
  },
  {
    title: "Node.js",
    persentage: 40
  },
  {
    title: "Mongo.db",
    persentage: 60
  }
];
const workFlowConfArr = [
  "WorkFlow",
  {
    title: "Git",
    persentage: 80
  },
  {
    title: "Gulp",
    persentage: 70
  },
  {
    title: "Bower",
    persentage: 60
  }
]
const contactsConfArr = [
  { link: "https://join.skype.com/invite/ediFtZ3183QO",
   img: skypeLogo,
   alt: "join me in skype",
   title: "Alexander Ignatov"
 },
 { link: "tel: +79209771001",
   img: phoneLogo,
   alt: "call me",
   title: "+79209771001"
 },
 { link: "mailto: alexsyscom@yandex.ru",
   img: emailLogo,
   alt: "e-mail",
   title: "alexsyscom@yandex.ru"
 },
 { link: "#",
   img: locationLogo,
   alt: "adress",
   title: "Рязань, ул.Колхозная 14к1"
 },
 
];

const siteMapItemsArr = [
  {
    title: "Мои работы",
    link:"#"
  },
  {
    title: "Обо мне",
    link:"#"
  },
  {
    title: "Блог",
    link:"/Blog"
  },
  {
    title: "Авторизация",
    link:"#"
  } 
];


const mainPage = (
  <>
    <Header>
      <HeaderTop>
        <SocialNetworks linksArr={socialList}/>
        <Menu />
      </HeaderTop>
      <Avatar conf={avatarSetting}/>
      <Arrow/>
    </Header>
    <main id="main">
      <section className="left-side">
        <div className="left-side__caption">
          <h1>ОБО МНЕ</h1>
        </div>
        <div className="about-me">
          <img
            src={myPhoto}
            alt="This is I am"
            className="about-me__my-photo"
          />
          <Caption conf={leftSide}/>
        </div>
      </section>
      <section className="right-side">
        <Caption conf={rightSide}/>
          <SoftSkill
            conf={frontendConfArr}
          />
          <SoftSkill
            conf={backendConfArr}
          />
          <SoftSkill
            conf={workFlowConfArr}
          />
      </section>
    </main>
    <section className="map">
      <Contacts conf={contactsConfArr} title="КОНТАКТЫ"/>
      <footer>
        <div className="footer">
          <div className="some-text">
              Этот сайт я делал в рамках самостоятельного обучения
          </div>
          <div className="footer-decorator"></div>
          <nav className="site-map">
            <Sitemap items={siteMapItemsArr} />
            <SocialNetworks linksArr={socialList}/>
          </nav>
          <div className="footer-decorator"></div>
          <Contacts
           conf={contactsConfArr}
           contactsModificator="contacts_footer"
           itemsModificator="contacts-items_footer"
           itemImageModificator="contacts-items__item__image contacts-items__item__image_hidden"
           itemLinkModificator="contacts-items__item__link contacts-items__item__link_white"
          />
        </div>
        <div className="copyright">
          &#169; Игнатов Александр | Создано с любовью | 2020
        </div>
      </footer>
    </section>
  </>
);

export default function App(){
  return(
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/">
            {mainPage}
          </Route>
        </Switch>
    </Router>
  )
}