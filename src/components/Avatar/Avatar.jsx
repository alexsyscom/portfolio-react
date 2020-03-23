import React from "react";
import Service from "../../assets/service";

export default function() {
  let service = new Service();
  return (
    <div className="avatar">
      <img src={service.getMyPhoto()} alt="me" className="avatar__photo" />
      <div className="avatar__sign">
        <span className="avatar__fullname">{service.getFullName()}</span>
        {service.getSign()}
      </div>
    </div>
  );
}
