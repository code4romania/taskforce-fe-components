import React from "react";
import { BannerImage } from "./banner-image";

export default { title: "Banner Image" };

export const Default = () => (
  <BannerImage
    link="https://code4.ro"
    image={
      {src: "https://stirioficiale.ro/storage/imagine principala_ROVACCINARE.png"}
    }
  />
);
