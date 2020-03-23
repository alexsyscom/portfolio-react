import React from "react";
import Caption from "../Caption/Caption";
import SoftSkills from "../SoftSkills/SoftSkills";
import Service from "../../assets/service";

export default function() {
  let service = new Service();
  return (
    <main id="main">
      <section className="left-side">
        <div className="left-side__caption">
          <h1>ОБО МНЕ</h1>
        </div>
        <div className="about-me">
          <img
            src={service.getMyPhoto()}
            alt="This is I am"
            className="about-me__my-photo"
          />
          <Caption conf={service.getLeftSideData()} />
        </div>
      </section>
      <section className="right-side">
        <Caption conf={service.getRightSideData()} />
        <SoftSkills />
      </section>
    </main>
  );
}
