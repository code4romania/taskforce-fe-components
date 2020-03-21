import React from "react";
import PropTypes from "prop-types";
import "./banner.scss";

export const Banner = ({ Color, Title, Link }) => {
  return (
    <div className={`banner-wrapper is-${Color}`}>
      <div className="banner">
        <div className="title">
          <a
            href="${Link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Title || ""}
          </a>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  Color: PropTypes.oneOf(["red", "pink", "green", "yellow"]),
  Title: PropTypes.node.isRequired,
  Link: PropTypes.node.isRequired
};
