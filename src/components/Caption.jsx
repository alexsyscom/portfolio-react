import React from 'react';

export default function(props){
    return(
        <>
            <div className="caption">
                <h2 className="caption__title">{props.conf.title}</h2>
                <div className="caption__decorator"></div>
            </div>
            <div className="description">
                {props.conf.description}
            </div>
        </>
    )
  }