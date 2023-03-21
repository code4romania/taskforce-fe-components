import React from "react";
import { IncubatedBy } from "./incubated-by";
import { Logo } from "../..";
import patriaBank from "../../images/patria-bank.png";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Incubated By",
  decorators: [withKnobs]
};

const customPartnerLogos = (
  <Logo url="https://www.patriabank.ro/" key="patria-bank">
    <img src={patriaBank} alt="Patria Bank" />
  </Logo>
);

const customMultiplePartnersLogos = [
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

const noPartner = 0;
const singlePartner = 1;
const multiPartner = 2;

const options = {
  "No Partner": noPartner,
  "Single Partner": singlePartner,
  "Multiple Partner": multiPartner
};


export const incubatedBy = () => {
  let logos;
  const option = select("Partners", options, noPartner)

  if (option === singlePartner) {
    logos = customPartnerLogos;
  }

  if (option === multiPartner) {
    logos = customMultiplePartnersLogos;
  }

  return (
    <IncubatedBy partnerLogos={logos} />
  )
};
