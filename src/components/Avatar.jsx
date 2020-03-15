import React from 'react';

export default function(props){
    return(
        <div className="avatar">
            <img src={props.conf.photo} alt="me" className="avatar__photo" />
            <div className="avatar__sign">
                <span className="avatar__fullname">
                    {props.conf.fullname}
                </span>
                {props.conf.description}
            </div>
      </div>

    )
}