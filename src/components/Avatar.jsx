import React from 'react';
import { MY_FULLNAME, SIGN} from '../consts/dictionary';
import MY_PHOTO from '../photo/my-photo.png';

export default function(props){
    return(
        <div className="avatar">
            <img src={MY_PHOTO} alt="me" className="avatar__photo" />
            <div className="avatar__sign">
                <span className="avatar__fullname">
                    {MY_FULLNAME}
                </span>
                {SIGN}
            </div>
      </div>

    )
}