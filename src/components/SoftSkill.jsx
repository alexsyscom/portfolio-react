import React from 'react';

export default function(props){
    const h3title = props.conf[0];
    const arr = props.conf.slice(1);
    const softSkills = arr.map((item,index) => {
       return(
        <div className="soft-skills__single-chart" key={index}
         >
            <svg viewBox="-1 -1 38 38" className="soft-skills__circular-chart" >
                <path
                className="soft-skills__circle-bg"
                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                className="soft-skills__circle"
                strokeDasharray={item.persentage+", 100"}
                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="soft-skills__percentage">
                {item.title}
                </text>
            </svg>
        </div>
       )
    });

    return(
        <>
            <h3 className="title">{h3title}</h3>
            <div className="soft-skills">
                {softSkills}
            </div>
        </>
      )
}