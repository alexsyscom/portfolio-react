import React from "react";
import Service from "../../assets/service";


export default function SocialNetworksArr() {
  let service = new Service();
  const buttonsList = service.getSocialList().map(item => {
    return (
      <li className="social-networks__item" key={item.id.toString()}>
        <a href={item.link}>
          <img src={item.img} alt={item.alt} />
        </a>
      </li>
    );
  });
  return <ul className="social-networks">{buttonsList}</ul>;
}
