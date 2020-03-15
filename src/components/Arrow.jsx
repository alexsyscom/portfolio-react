import React from 'react';

import arrowImg from '../icons/arrow_down.png'

export default function(){
    return(
        <div className="arrow">
        <a
          href="#main"
          title="Scroll down to main content"
          className="arrow__link"
          ><img src={arrowImg} alt="arrow_down" id="arrow"
        /></a>
      </div>

    )
}