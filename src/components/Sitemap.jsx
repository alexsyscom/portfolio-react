import React from 'react';
import { Link } from 'react-router-dom';

  export default function (props){
    const arr = props.items;
    const siteMapList = arr.map((item, index) => {
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