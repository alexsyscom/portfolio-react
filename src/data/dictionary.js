//Import images
import VkLogo from "../assets/icons/vk.png";
import GithubLogo from "../assets/icons/github.png";
import InLogo from "../assets/icons/in.png";
import MY_PHOTO from '../assets/photo/my-photo.png';
import skypeLogo from '../assets/icons/skype_n.png';
import phoneLogo from '../assets/icons/phone_n.png';
import emailLogo from '../assets/icons/email_n.png';
import locationLogo from '../assets/icons/map_n.png';
import MENU_HUMBURGER from '../assets/icons/hamburger.png';
import ARROW_DOWN from '../assets/icons/arrow_down.png';

export {MY_PHOTO as myPhoto, MENU_HUMBURGER as menuHumburger, ARROW_DOWN as arrow_down };
export const MY_FULLNAME = "Александр Игнатов";
export const SIGN = "Личный сайт веб разработчика";
export const SOCIAL_LIST = [
  {
    id: 1,
    link: "https://vk.com/id51353349",
    img: VkLogo,
    alt: "vk"
  },
  {
    id: 2,
    link: "https://github.com/alexsyscom",
    img: GithubLogo,
    alt: "github"
  },
  { id: 3, link: "#", img: InLogo, alt: "in" }
];

export const LEFT_SIDE = {
  title: "КТО Я",
  description: `
    Я веб разработчик из Рязани. Мне 35 лет. Я занимаюсь разработкой
    современных сайтов и приложений. Мне нравится делать интересные и
    современные проекты. Этот сайт я сделал в рамках самостоятельного
    обучения. Чуть позже я освежу в нём свой контент. А пока посмотрите,
    как тут всё классно и красиво!`
};
export const RIGTH_SIDE = {
  title: "ЧЕМ Я МОГУ БЫТЬ ВАМ ПОЛЕЗЕН",
  description: `
      Больше всего меня привлекает Frontend разработка, но я также знаком и
      могу решать не сложные задачи на Backend. Но давайте по порядку.
    `
};

export const CONTACTS = [
  {
    link: "https://join.skype.com/invite/ediFtZ3183QO",
    img: skypeLogo,
    alt: "join me in skype",
    title: "Alexander Ignatov"
  },
  {
    link: "tel: +79209771001",
    img: phoneLogo,
    alt: "call me",
    title: "+79209771001"
  },
  {
    link: "mailto: alexsyscom@yandex.ru",
    img: emailLogo,
    alt: "e-mail",
    title: "alexsyscom@yandex.ru"
  },
  {
    link: "#",
    img: locationLogo,
    alt: "adress",
    title: "Рязань, ул.Колхозная 14к1"
  }
];

export const SITEMAP = [
  {
    title: "Мои работы",
    link: "#"
  },
  {
    title: "Обо мне",
    link: "#"
  },
  {
    title: "Блог",
    link: "/Blog"
  },
  {
    title: "Авторизация",
    link: "#"
  }
];

export  const SOFTSKILLS = {
  Frontend: [
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
  ],
  Backend: [
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
  ],
  WorkFlow: [
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
};

