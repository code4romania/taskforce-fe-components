import React from "react";
import PropTypes from "prop-types";
import "./logo.scss";

export const Logo = ({ src, url, alt, imgClass }) => {
  return (
    <div className="logo">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={src} className={imgClass} alt={alt} />
        </a>
      ) : (
        <img src={src} className={imgClass} alt={alt} />
      )}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string,
  alt: PropTypes.string,
  imgClass: PropTypes.string
};
