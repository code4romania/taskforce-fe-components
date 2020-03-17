import React from 'react';

import { Logo } from '../logo/logo';

import './incubated-by.scss';

export const IncubatedBy = () => {
  return (
    <div className="incubated-by">
      <p className="caption">proiect incubat în programul</p>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};
