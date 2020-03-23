import React from "react";
import Service from "../../assets/service";

export default function() {
  let service = new Service();
  return (
    <div className="arrow">
      <a
        href="#main"
        title="Scroll down to main content"
        className="arrow__link"
      >
        <img src={service.getArrowImage()} alt="arrow_down" id="arrow" />
      </a>
    </div>
  );
}
