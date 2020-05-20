import React from "react";
import PropTypes from "prop-types";
import {
  Title,
  SoftSkillsWrapper,
  SoftSkillsPersentage,
  SoftSkillsCircularChart,
  SoftSkillsCircle,
  SoftSkillsCircalBg,
} from "../styled";

const CreateSoftSkillsItems = (props) => {
  let softSkillItems = [];
  const D =
    "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831";
  for (let [key, value] of Object.entries(props.data)) {
    let softskills = value.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div key={Math.random().toString()}>
            <SoftSkillsCircularChart viewBox="-1 -1 38 38">
              <SoftSkillsCircalBg d={D} />
              <SoftSkillsCircle
                strokeDasharray={item.persentage + ", 100"}
                d={D}
              />
              <SoftSkillsPersentage x="18" y="20.35">
                {item.title}
              </SoftSkillsPersentage>
            </SoftSkillsCircularChart>
          </div>
        </React.Fragment>
      );
    });
    let softSkillItem = (
      <React.Fragment key={Math.random().toString()}>
        <Title>{key}</Title>
        <SoftSkillsWrapper>{softskills}</SoftSkillsWrapper>
      </React.Fragment>
    );
    softSkillItems.push(softSkillItem);
  }

  return softSkillItems;
};

CreateSoftSkillsItems.propTypes = {
  data: PropTypes.object,
};

export default CreateSoftSkillsItems;
