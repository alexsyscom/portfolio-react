import React from "react";
import Service from "../../service";

import { Styled } from "./styled";

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
            <div key={Math.random().toString()}>
              <Styled.SoftSkillsCircularChart viewBox="-1 -1 38 38">
                <Styled.SoftSkillsCircalBg
                  d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <Styled.SoftSkillsCircle
                  strokeDasharray={item.persentage + ", 100"}
                  d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <Styled.SoftSkillsPersentage x="18" y="20.35">
                  {item.title}
                </Styled.SoftSkillsPersentage>
              </Styled.SoftSkillsCircularChart>
            </div>
          </React.Fragment>
        );
      });
      let softSkillItem = (
        <React.Fragment key={Math.random().toString()}>
          <Styled.Title>{key}</Styled.Title>
          <Styled.SoftSkills>{softskills}</Styled.SoftSkills>
        </React.Fragment>
      );
      softSkillItems.push(softSkillItem);
    }

    return !this.state.isLoading ? <>{softSkillItems}</> : null;
  }
}
