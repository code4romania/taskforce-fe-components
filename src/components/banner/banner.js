import React from "react";
import PropTypes from "prop-types";
import "./banner.scss";

export const Banner = ({ color, title, link }) => {
  return (
    <div className={`banner-wrapper is-${color}`}>
      <div className="banner">
        <div className="title">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            {title || ""}
          </a>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  color: PropTypes.oneOf(["red", "pink", "green", "yellow"]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

Banner.defaultProps = {
  color: "yellow"
};
