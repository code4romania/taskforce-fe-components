import React from "react";
import PropTypes from "prop-types";
import partnerLogo from "./assets/partener.png";
import developerLogo from "./assets/developer.png";
import "./developed-by.scss";
import { DevelopedByLogo } from "./developed-by-logo";

export const DevelopedBy = ({ showSecondLine }) => {
  return (
    <>
      <div className="container developed-by">
        <span>
          <div>
            <div className="caption">Un proiect in parteneriat cu </div>
            <DevelopedByLogo
              src={partnerLogo}
              url={"https://www.gov.ro"}
              alt={"Guvernul Romaniei Logo"}
              imgClass={"rem3"}
            />
          </div>

          <div>
            <div className="caption"> dezvoltat de </div>
            <DevelopedByLogo
              src={developerLogo}
              url={"https://code4.ro"}
              alt={"Code 4 Romania Logo"}
              imgClass={"rem2"}
            />
          </div>
        </span>
      </div>
      {showSecondLine && (
        <div className="container developed-by">
          <span>
            <div>
              <div className="caption">Continut avizat de</div>
              <DevelopedByLogo
                src={developerLogo}
                url={"http://www.dsu.mai.gov.ro/"}
                alt={"Directia de Sanatate Publica Logo"}
                imgClass={"rem3"}
              />
              <DevelopedByLogo
                src={partnerLogo}
                url={"http://www.ms.ro/"}
                alt={"Ministerul Sanatatii Logo"}
                imgClass={"rem2"}
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
