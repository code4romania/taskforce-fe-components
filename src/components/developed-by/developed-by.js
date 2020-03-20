import React from "react";
import PropTypes from "prop-types";
import partnerLogo from "./assets/partener.png";
import developerLogo from "./assets/developer.png";
import dsuLogo from "./assets/dsu.png";
import "./developed-by.scss";
import { Logo } from "../logo/logo";

export const DevelopedBy = ({ showSecondLine }) => {
  return (
    <>
      <div className="container developed-by">
        <span>
          <div>
            <div className="caption">Un proiect in parteneriat cu </div>
            <Logo
              src={partnerLogo}
              url={"https://www.gov.ro"}
              alt={"Guvernul Romaniei Logo"}
            />
          </div>

          <div>
            <div className="caption"> dezvoltat de </div>
            <Logo
              src={developerLogo}
              url={"https://code4.ro"}
              alt={"Code 4 Romania Logo"}
              imgClass={"smaller"}
            />
          </div>
        </span>
      </div>
      {showSecondLine && (
        <div className="container developed-by">
          <span>
            <div>
              <div className="caption">Continut avizat de</div>
              <Logo
                src={dsuLogo}
                url={"http://www.dsu.mai.gov.ro/"}
                alt={"Directia pentru Situatii de Urgenta Logo"}
              />
            </div>
          </span>
        </div>
      )}
    </>
  );
};

DevelopedBy.propTypes = {
  showSecondLine: PropTypes.bool
};
