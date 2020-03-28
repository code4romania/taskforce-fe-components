import React from "react";
import "./../../styles.scss";
import { DevelopedBy } from "./developed-by";
import { withKnobs } from "@storybook/addon-knobs";
import { Logo } from "../..";

export default { title: "Developed By", decorators: [withKnobs] };

export const oneLine = () => <DevelopedBy />;

export const twoLines = () => <DevelopedBy showSecondLine />;

export const oneLineNoPartners = () => <DevelopedBy showPartners={false} />;

const customPartnerLogos = [
  <Logo url={"https://girlswhocode.com/"} key="github_1">
    <img
      src="http://www.bigdreammovement.com/wp-content/uploads/girls-who-code.png"
      alt="Custom Partner"
    />
  </Logo>,
  <Logo url={"https://github.com"} key="github_2">
    <img
      src="https://tctechcrunch2011.files.wordpress.com/2013/01/github-logo.png"
      alt="Custom Partner"
    />
  </Logo>
];

const customSecondLineLogos = [
  <Logo url={"https://codeforall.org/"} key="github_3">
    <img
      src="https://epf.org.pl/en/wp-content/uploads/sites/3/2015/11/code_for_all_logo.png"
      alt="Custom Partner"
    />
  </Logo>,
  <Logo url={"https://girlswhocode.com/"} key="github_4">
    <img
      src="http://www.bigdreammovement.com/wp-content/uploads/girls-who-code.png"
      alt="Custom Partner"
    />
  </Logo>
];

export const oneLineCustom = () => (
  <DevelopedBy showPartners partnerLogos={customPartnerLogos} />
);

export const twoLineCustom = () => (
  <DevelopedBy
    showPartners
    partnerLogos={customPartnerLogos}
    showSecondLine
    secondLineCaption="Much appreciation goes to"
    secondLineLogos={customSecondLineLogos}
  />
);
