import React from "react";
import PropTypes from "prop-types";
import DeveloperLogo from "../../images/code4romania.svg";
import partnerLogo from "./assets/partener.png";
import dsuLogo from "./assets/dsu.png";
import "./developed-by.scss";
import { Logo } from "../logo/logo";

export const DevelopedBy = ({ showSecondLine }) => {
  return (
    <>
      <div className="container developed-by">
        <div>
          <div classNamne="caption">Un proiect în parteneriat cu </div>
          <Logo url={"https://www.gov.ro"}>
            <img src={partnerLogo} alt="Guvernul Romaniei" />
          </Logo>
        </div>

        <div>
          <div className="caption"> dezvoltat de </div>
          <Logo url={"https://code4.ro"} imgClass={"smaller"}>
            <DeveloperLogo width="110" />
          </Logo>
        </div>
      </div>
      {showSecondLine && (
        <div className="container developed-by">
          <div>
            <div className="caption">Conținut avizat de</div>
            <Logo url={"http://www.dsu.mai.gov.ro/"}>
              <img src={dsuLogo} alt="Directia pentru Situatii de Urgenta" />
            </Logo>
          </div>
        </div>
      )}
    </>
  );
};

DevelopedBy.propTypes = {
  showSecondLine: PropTypes.bool
};
