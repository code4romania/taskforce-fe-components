import React from "react";
import "./../../styles.scss";
import { SocialsShare } from "./social-share";
import { withKnobs, text } from "@storybook/addon-knobs";

export default { title: "Socials Share", decorators: [withKnobs] };

export const withUrl = () => (
  <SocialsShare
    currentPage={text("currentPage", "https://code4.ro/ro/")}
  ></SocialsShare>
);
