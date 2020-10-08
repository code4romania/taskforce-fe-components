import React from "react";
import { DevelopedBy } from "./developed-by";
import { Logo } from "../..";
import partnerLogo from "./assets/partener.png";
import dsuLogo from "./assets/dsu.png";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default { title: "Developed By", decorators: [withKnobs] };

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

export const developedBy = () => {
  const showSecondLine = boolean("Show Secondary Line", false);

  return (
    <DevelopedBy
      showPartners={boolean("Show Prtners", false)}
      partnerLogos={boolean("Use Custom Partners Logos", false) && customPartnerLogos}
      showSecondLine={showSecondLine}
      secondLineCaption={showSecondLine && text("Second Line Caption", "Much appreciation goes to")}
      secondLineLogos={showSecondLine && boolean("Use Second Line Custom Logos", false) && customSecondLineLogos
      }
    />
  );
};

