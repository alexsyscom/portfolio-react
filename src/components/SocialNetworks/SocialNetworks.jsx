import React, { useState, useEffect } from "react";
import Service from "../../service";

import { SocialNetworksWrapper, SocialNetworksItem } from "./styled";

const SocialNetworks = () => {
  const [isLoading, setLoading] = useState(true);
  const [socialList, setSocialList] = useState([]);

  useEffect(() => {
    const service = new Service();
    const data = service.getSocialList();
    setLoading(false);
    setSocialList(data);
  }, []);

  return (
    <SocialNetworksWrapper>
      {!isLoading
        ? socialList.map((item) => {
            return (
              <SocialNetworksItem key={item.id.toString()}>
                <a href={item.link}>
                  <img src={item.img} alt={item.alt} />
                </a>
              </SocialNetworksItem>
            );
          })
        : null}
    </SocialNetworksWrapper>
  );
};

export default SocialNetworks;
