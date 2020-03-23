import React from "react";
import { Link } from "react-router-dom";
import Service from "../../assets/service";

export default function Menu() {
  let service = new Service();
  return (
    <>
      <div className="header-top__menu">
        <img
          src={service.getMenuLogo()}
          alt="menu"
          className="header-top__image"
        />
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/" className="menu__items">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="menu__items">
                Блог
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

// document.addEventListener('DOMContentLoaded',() =>{
//   const hamburger = document.querySelector('.header-top__menu');
//   const menu = document.querySelector('.menu');
//   // const body = document.querySelector('body');

//   //
//   hamburger.addEventListener('click', ()=>{
//     hamburger.classList.toggle('header-top__menu-hidden');
//     menu.classList.toggle('menu-visible');
//     // body.classList.toggle('blured');
//   });

//   menu.addEventListener('mouseleave',(e)=>{
//     menu.classList.toggle('menu-visible');
//     hamburger.classList.toggle('header-top__menu-hidden');
//   });

// });
