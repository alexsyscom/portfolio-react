import React, { useState, useEffect } from "react";
import Service from "../../service";
import CreateSoftSkillsItems from "./CreateSoftSkillsItems/CreateSoftSkillsItems";

const SoftSkills = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const service = new Service();
    const data = service.getSoftSkills();
    setLoading(false);
    setData(data);
  }, []);

  return !isLoading ? (
    <>
      <CreateSoftSkillsItems data={data} />
    </>
  ) : null;
};

export default SoftSkills;
