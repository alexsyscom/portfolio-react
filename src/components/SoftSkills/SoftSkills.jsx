import React from "react";
import Service from "../../assets/service";

export default function() {
  let service = new Service();
  let softSkillItems = [];
  const Data = service.getSoftSkills();

  for (let [key, value] of Object.entries(Data)) {
    let softskills = value.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div
            className="soft-skills__single-chart"
            key={Math.random().toString()}
          >
            <svg viewBox="-1 -1 38 38" className="soft-skills__circular-chart">
              <path
                className="soft-skills__circle-bg"
                d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="soft-skills__circle"
                strokeDasharray={item.persentage + ", 100"}
                d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="soft-skills__percentage">
                {item.title}
              </text>
            </svg>
          </div>
        </React.Fragment>
      );
    });
    let softSkillItem = (
      <React.Fragment key={Math.random().toString()}>
        <h3 className="title">{key}</h3>
        <div className="soft-skills">{softskills}</div>
      </React.Fragment>
    );
    softSkillItems.push(softSkillItem);
  }

  return <>{softSkillItems}</>;
}
