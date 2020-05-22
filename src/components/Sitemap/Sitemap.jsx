import React, { useState, useEffect } from "react";
import Service from "../../service";

import { SiteMapItems, SiteMapItemsItem, WhiteLink } from "./styled";

const Sitemap = () => {
  const [isLoading, setLoading] = useState(true);
  const [siteMapData, setSiteMapData] = useState("");

  useEffect(() => {
    const service = new Service();
    const Data = service.getSitemap();
    setLoading(false);
    setSiteMapData(Data);
  }, []);

  return (
    <SiteMapItems>
      {!isLoading
        ? siteMapData.map((item, index) => {
            return (
              <SiteMapItemsItem key={index.toString()}>
                <WhiteLink to={item.link}>{item.title}</WhiteLink>
              </SiteMapItemsItem>
            );
          })
        : null}
    </SiteMapItems>
  );
};

export default Sitemap;
