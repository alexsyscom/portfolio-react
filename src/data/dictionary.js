//Import images
import VkLogo from "../assets/icons/vk.png";
import GithubLogo from "../assets/icons/github.png";
import InLogo from "../assets/icons/in.png";
import myPhoto from "../assets/photo/my-photo.png";
import skypeLogo from "../assets/icons/skype_n.png";
import phoneLogo from "../assets/icons/phone_n.png";
import emailLogo from "../assets/icons/email_n.png";
import locationLogo from "../assets/icons/map_n.png";
import menuHumburger from "../assets/icons/hamburger.png";
import arrow_down from "../assets/icons/arrow_down.png";

export const ARROW_DOWN = JSON.stringify(arrow_down);
export const MENU_HUMBURGER = JSON.stringify(menuHumburger);
export const MY_PHOTO = JSON.stringify(myPhoto);
export const BLOG_CAPTURE = JSON.stringify("БЛОГ");
export const ABOUT_CAPTURE = JSON.stringify("Александр Игнатов");
export const ABOUT_SIGN = JSON.stringify("Личный сайт веб разработчика");
export const BLOG_SIGN = JSON.stringify("Статьи, которые я написал");

export const SOCIAL_LIST = JSON.stringify([
  {
    id: 1,
    link: "https://vk.com/id51353349",
    img: VkLogo,
    alt: "vk",
  },
  {
    id: 2,
    link: "https://github.com/alexsyscom",
    img: GithubLogo,
    alt: "github",
  },
  { id: 3, link: "#", img: InLogo, alt: "in" },
]);

export const LEFT_SIDE = JSON.stringify({
  title: "КТО Я",
  description: `
    Я веб разработчик из Рязани. Мне 35 лет. Я занимаюсь разработкой
    современных сайтов и приложений. Мне нравится делать интересные и
    современные проекты. Этот сайт я сделал в рамках самостоятельного
    обучения. Чуть позже я освежу в нём свой контент. А пока посмотрите,
    как тут всё классно и красиво!`,
});
export const RIGTH_SIDE = JSON.stringify({
  title: "ЧЕМ Я МОГУ БЫТЬ ВАМ ПОЛЕЗЕН",
  description: `
      Больше всего меня привлекает Frontend разработка, но я также знаком и
      могу решать не сложные задачи на Backend. Но давайте по порядку.
    `,
});

export const CONTACTS = JSON.stringify([
  {
    link: "https://join.skype.com/invite/ediFtZ3183QO",
    img: skypeLogo,
    alt: "join me in skype",
    title: "Alexander Ignatov",
  },
  {
    link: "tel: +79209771001",
    img: phoneLogo,
    alt: "call me",
    title: "+79209771001",
  },
  {
    link: "mailto: alexsyscom@yandex.ru",
    img: emailLogo,
    alt: "e-mail",
    title: "alexsyscom@yandex.ru",
  },
  {
    link: "#",
    img: locationLogo,
    alt: "adress",
    title: "Рязань, ул.Колхозная 14к1",
  },
]);

export const SITEMAP = JSON.stringify([
  {
    title: "Мои работы",
    link: "#",
  },
  {
    title: "Обо мне",
    link: "/",
  },
  {
    title: "Блог",
    link: "/Blog",
  },
  {
    title: "Авторизация",
    link: "#",
  },
]);

export const SOFTSKILLS = JSON.stringify({
  Frontend: [
    {
      title: "HTML",
      persentage: 90,
    },
    {
      title: "CSS",
      persentage: 80,
    },
    {
      title: "JavaScript",
      persentage: 80,
    },
  ],
  Backend: [
    {
      title: "PHP",
      persentage: 40,
    },
    {
      title: "mySQL",
      persentage: 55,
    },
    {
      title: "Node.js",
      persentage: 40,
    },
    {
      title: "Mongo.db",
      persentage: 60,
    },
  ],
  WorkFlow: [
    {
      title: "Git",
      persentage: 80,
    },
    {
      title: "Gulp",
      persentage: 70,
    },
    {
      title: "Bower",
      persentage: 60,
    },
  ],
});

export const POSTS = JSON.stringify([
  {
    id: 1,
    date: "22 ноября 2016",
    title: "Самое важное в SASS",
    content: `<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent metus risus, auctor non sodales vitae, sagittis ac
    tortor. Cras congue ligula quis eros ornare dignissim. Nunc in
    nunc at tortor maximus luctus. Phasellus vehicula sem a cursus
    mattis. Nam blandit laoreet eros. Pellentesque eu dignissim
    quam. Morbi ut tempus elit. Sed in arcu sit amet nulla
    placerat dignissim a sit amet ligula. Etiam non lacus quis
    velit imperdiet laoreet. Sed urna felis, elementum non
    faucibus a, varius sit amet dui. Quisque sodales tristique
    risus quis suscipit. Curabitur efficitur lorem tempor felis
    finibus tristique. Praesent malesuada nisl eu dui congue, in
    bibendum purus sodales. Ut ultricies lorem quis nisl gravida,
    in consequat justo bibendum. In blandit sapien in augue
    sollicitudin, vitae molestie lectus ultricies.
  </p>
  <p>
    Maecenas venenatis, felis consectetur egestas congue, metus
    lacus cursus nisi, at tincidunt ipsum nulla sed ligula.
    Aliquam efficitur magna ex, quis finibus tortor malesuada vel.
    Aliquam consequat nisl ipsum, id suscipit metus mollis non.
    Aenean sagittis vestibulum lorem, vel posuere diam lobortis
    ut. Fusce vel ultricies tellus. Sed iaculis accumsan bibendum.
    Mauris dictum felis non metus elementum sollicitudin.
    Curabitur felis diam, euismod sed ante sit amet, interdum
    consectetur tellus. Suspendisse sit amet sagittis turpis.
    Etiam egestas ornare dolor eu molestie. Phasellus scelerisque
    non velit vel venenatis. Morbi lacus velit, bibendum vitae
    tincidunt at, pharetra non tellus.
  </p>`,
  },
  {
    id: 2,
    date: "16 ноября 2016",
    title: "Приемы в верстке, без которых не обходится ни один сайт",
    content: `<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent metus risus, auctor non sodales vitae, sagittis ac
    tortor. Cras congue ligula quis eros ornare dignissim. Nunc in
    nunc at tortor maximus luctus. Phasellus vehicula sem a cursus
    mattis. Nam blandit laoreet eros. Pellentesque eu dignissim
    quam. Morbi ut tempus elit. Sed in arcu sit amet nulla
    placerat dignissim a sit amet ligula. Etiam non lacus quis
    velit imperdiet laoreet. Sed urna felis, elementum non
    faucibus a, varius sit amet dui. Quisque sodales tristique
    risus quis suscipit. Curabitur efficitur lorem tempor felis
    finibus tristique. Praesent malesuada nisl eu dui congue, in
    bibendum purus sodales. Ut ultricies lorem quis nisl gravida,
    in consequat justo bibendum. In blandit sapien in augue
    sollicitudin, vitae molestie lectus ultricies.
  </p>
  <p>
    Maecenas venenatis, felis consectetur egestas congue, metus
    lacus cursus nisi, at tincidunt ipsum nulla sed ligula.
    Aliquam efficitur magna ex, quis finibus tortor malesuada vel.
    Aliquam consequat nisl ipsum, id suscipit metus mollis non.
    Aenean sagittis vestibulum lorem, vel posuere diam lobortis
    ut. Fusce vel ultricies tellus. Sed iaculis accumsan bibendum.
    Mauris dictum felis non metus elementum sollicitudin.
    Curabitur felis diam, euismod sed ante sit amet, interdum
    consectetur tellus. Suspendisse sit amet sagittis turpis.
    Etiam egestas ornare dolor eu molestie. Phasellus scelerisque
    non velit vel venenatis. Morbi lacus velit, bibendum vitae
    tincidunt at, pharetra non tellus.
  </p>`,
  },
  {
    id: 3,
    date: "14 октября 2016",
    title: "Самый необходимый набор Gulp плагинов",
    content: `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent metus risus, auctor non sodales vitae, sagittis ac
      tortor. Cras congue ligula quis eros ornare dignissim. Nunc in
      nunc at tortor maximus luctus. Phasellus vehicula sem a cursus
      mattis. Nam blandit laoreet eros. Pellentesque eu dignissim
      quam. Morbi ut tempus elit. Sed in arcu sit amet nulla
      placerat dignissim a sit amet ligula. Etiam non lacus quis
      velit imperdiet laoreet. Sed urna felis, elementum non
      faucibus a, varius sit amet dui. Quisque sodales tristique
      risus quis suscipit. Curabitur efficitur lorem tempor felis
      finibus tristique. Praesent malesuada nisl eu dui congue, in
      bibendum purus sodales. Ut ultricies lorem quis nisl gravida,
      in consequat justo bibendum. In blandit sapien in augue
      sollicitudin, vitae molestie lectus ultricies.
    </p>
    <p>
      Maecenas venenatis, felis consectetur egestas congue, metus
      lacus cursus nisi, at tincidunt ipsum nulla sed ligula.
      Aliquam efficitur magna ex, quis finibus tortor malesuada vel.
      Aliquam consequat nisl ipsum, id suscipit metus mollis non.
      Aenean sagittis vestibulum lorem, vel posuere diam lobortis
      ut. Fusce vel ultricies tellus. Sed iaculis accumsan bibendum.
      Mauris dictum felis non metus elementum sollicitudin.
      Curabitur felis diam, euismod sed ante sit amet, interdum
      consectetur tellus. Suspendisse sit amet sagittis turpis.
      Etiam egestas ornare dolor eu molestie. Phasellus scelerisque
      non velit vel venenatis. Morbi lacus velit, bibendum vitae
      tincidunt at, pharetra non tellus.
    </p>`,
  },
]);
