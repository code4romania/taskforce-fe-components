import React from "react";

import { PartnerLogo } from "../partner-logo/partner-logo";
import { DeveloperLogo } from "../developer-logo/developer-logo";

import "./developed-by.scss";

export const DevelopedBy = () => {
  return (
    <div className="developed-by">
      <div className="developer">
        <p className="caption">Un proiect dezvoltat de</p>
        <div className="captioned-logo">
          <DeveloperLogo />
        </div>
      </div>

      <div className="partner">
        <p className="caption">In parteneriat cu</p>
        <div className="captioned-logo">
          <PartnerLogo />
        </div>
      </div>
    </div>
  );
};
