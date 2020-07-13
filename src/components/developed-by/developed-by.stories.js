import React from "react";
import { DevelopedBy } from "./developed-by";
import { withKnobs } from "@storybook/addon-knobs";
import { Logo } from "../..";
import partnerLogo from "./assets/partener.png";
import dsuLogo from "./assets/dsu.png";

export default { title: "Developed By", decorators: [withKnobs] };

export const oneLine = () => <DevelopedBy />;

export const twoLines = () => <DevelopedBy showSecondLine />;

export const oneLineNoPartners = () => <DevelopedBy showPartners={false} />;

const customPartnerLogos = [
  <Logo url="https://www.gov.ro" key="gov">
    <img src={partnerLogo} alt="Guvernul României" />
  </Logo>,
  <Logo url="http://www.dsu.mai.gov.ro" key="dsu">
    <img src={dsuLogo} alt="Departamentul pentru Situații de Urgență" />
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
