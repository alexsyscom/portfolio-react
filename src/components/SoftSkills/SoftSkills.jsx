import React from "react";
import Service from "../../service";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: "",
    };
  }

  componentDidMount() {
    const service = new Service();
    const data = service.getSoftSkills();
    this.setState({
      isLoading: false,
      data: data,
    });
  }
  render() {
    let softSkillItems = [];
    for (let [key, value] of Object.entries(this.state.data)) {
      let softskills = value.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className="soft-skills__single-chart"
              key={Math.random().toString()}
            >
              <svg
                viewBox="-1 -1 38 38"
                className="soft-skills__circular-chart"
              >
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

    return !this.state.isLoading ? <>{softSkillItems}</> : null;
  }
}
