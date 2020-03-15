import React from "react";
import PropTypes from "prop-types";
import "./hero.scss";

export const Hero = ({ title, subtitle, children }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="title">
          {children ? <span className="hero-icon">{children}</span> : <></>}
          {title}
        </div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node
};
