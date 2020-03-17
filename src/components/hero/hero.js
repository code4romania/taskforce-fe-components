import React from "react";
import PropTypes from "prop-types";
import CovidSvg from "../../icons/covid-all.svg";
import "./hero.scss";

export const Hero = ({
  title,
  subtitle,
  children,
  useFallbackIcon = false
}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="title">
          {Boolean(!children)}
          {children && <span className="hero-icon">{children}</span>}
          {!children && useFallbackIcon && (
            <span className="hero-icon">
              <CovidSvg style={{ height: "33px", width: "27px" }} />
            </span>
          )}
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
  children: PropTypes.node,
  useFallbackIcon: PropTypes.bool
};
