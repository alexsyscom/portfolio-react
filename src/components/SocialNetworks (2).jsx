import React from 'react';

  export default function (props){
    const arr = props.linksArr;
    const buttonsList = arr.map((item) => {
        return( 
              <li
              className="social-networks__item"
              key={(item.id).toString()}>
                <a href={item.link}
                  ><img src={item.img} alt={item.alt}
                /></a>
              </li>
        )
    });
    return(
      <ul className="social-networks">
        {buttonsList}
      </ul>
    )
  }