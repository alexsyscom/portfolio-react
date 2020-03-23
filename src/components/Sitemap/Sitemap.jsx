import React from 'react';
import { Link } from 'react-router-dom';
import Service from "../../assets/service";


  export default function (){
    let service = new Service();
    const siteMapList = service.getSitemap().map((item, index) => {
        return( 
              <li
              className="site-map__items__item"
              key={(index).toString()}>
                <Link to={item.link} style={{color: 'white'}}>
                  {item.title}
                </Link>
              </li>
        )
    });
    return(
      <ul className="site-map__items">
        {siteMapList}
      </ul>
    )
  }