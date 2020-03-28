import React from "react";
import PropTypes from "prop-types";
import "./logo.scss";

export const Logo = ({ children, url, imgClass }) => {
  return (
    <div className="logo">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span className={imgClass}>{children}</span>
        </a>
      ) : (
        <span className={imgClass}>{children}</span>
      )}
    </div>
  );
};

Logo.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  imgClass: PropTypes.string
};
