import React from "react";
import { BannerImage } from "./banner-image";

export default { title: "Banner Image" };

export const Default = () => (
  <BannerImage
    link={{ path: "https://code4.ro", shouldOpenLinkOnNewPage: false }}
    image={{
      src:
        "https://stirioficiale.ro/storage/imagine principala_ROVACCINARE.png"
    }}
  />
);
