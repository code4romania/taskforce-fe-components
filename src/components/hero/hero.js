import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as CovidSvg } from "../../images/covid-all.svg";
import "./hero.scss";

export const Hero = ({
  title,
  subtitle,
  children,
  useFallbackIcon = false,
}) => {
  return (
    <header className="hero">
      <div className="hero-body">
        <h2 className="title">
          {Boolean(!children)}
          {children && <span className="hero-icon">{children}</span>}
          {!children && useFallbackIcon && (
            <span className="hero-icon">
              <CovidSvg style={{ height: "33px", width: "27px" }} />
            </span>
          )}
          {title}
        </h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </header>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  useFallbackIcon: PropTypes.bool,
};
