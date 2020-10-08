import React from "react";
import { Hero } from "./hero";
import { ReactComponent as ArrowSvg } from "../../images/icons/arrow-right.svg";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

const title = "Ce pasi ai de urmat";
const subtitle = "Pentru a te putea ajuta ...";

export default {
  title: "Hero",
  decorators: [withKnobs]
};

export const hero = () => {
  const useFallbackIcon = boolean("Use Fallback Icon", false);

  return (
    <Hero
      title={text("Title", title)}
      subtitle={boolean("With Subtitle", false) && text("Subtitle", subtitle)}
      useFallbackIcon={useFallbackIcon}
    >
      { !useFallbackIcon && boolean("Use Custom Icon", false) && <ArrowSvg />}
    </Hero>
  )
};
