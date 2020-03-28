import React from "react";
import PropTypes from "prop-types";
import DeveloperLogo from "../../images/code4romania.svg";
import partnerLogo from "./assets/partener.png";
import dsuLogo from "./assets/dsu.png";
import "./developed-by.scss";
import { Logo } from "../logo/logo";

export const DevelopedBy = ({
  showSecondLine,
  showPartners,
  partnerLogos,
  secondLineCaption,
  secondLineLogos
}) => {
  const partnersStr = "Un proiect în parteneriat cu ";
  const developedByStr = "dezvoltat de ";
  const projDevelopedByStr = "Un proiect dezvoltat de ";

  const defaultPartners = [
    <Logo url={"https://www.gov.ro"} key="gov">
      <img src={partnerLogo} alt="Guvernul Romaniei" />
    </Logo>
  ];

  const defaultSecondLineCaption = "Conținut avizat de";
  const defaultSecondLineLogos = [
    <Logo url={"http://www.dsu.mai.gov.ro/"} key="DSU">
      <img src={dsuLogo} alt="Directia pentru Situatii de Urgenta" />
    </Logo>
  ];

  const renderPartnersList = partners => (
    <div>
      <div className="caption">{partnersStr}</div>
      <div className="logo-wrapper">{partners}</div>
    </div>
  );

  const renderPartners = () => {
    if (showPartners && partnerLogos && partnerLogos.length > 0) {
      return renderPartnersList(partnerLogos);
    } else if (showPartners) {
      return renderPartnersList(defaultPartners);
    }
    return null;
  };

  const renderSecondLine = () => {
    if (showSecondLine) {
      return (
        <div className="container developed-by">
          <div>
            <div className="caption">
              {secondLineCaption || defaultSecondLineCaption}
            </div>
            <div className="logo-wrapper">
              {secondLineLogos || defaultSecondLineLogos}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="container developed-by">
        {renderPartners()}

        <div>
          <div className="caption">
            {showPartners ? developedByStr : projDevelopedByStr}
          </div>

          <Logo url={"https://code4.ro"} imgClass={"smaller"}>
            <DeveloperLogo width="110" />
          </Logo>
        </div>
      </div>

      {renderSecondLine()}
    </>
  );
};

DevelopedBy.propTypes = {
  showSecondLine: PropTypes.bool,
  showPartners: PropTypes.bool,
  partnerLogos: PropTypes.arrayOf(PropTypes.node),
  secondLineCaption: PropTypes.string,
  secondLineLogos: PropTypes.arrayOf(PropTypes.node)
};

DevelopedBy.defaultProps = {
  showPartners: true
};
