import React from "react";
import PropTypes from "prop-types";

export const DevelopedByLogo = ({ src, url, alt, imgClass }) => {
  return (
    <div className={"developed-by-logo"}>
      {url ? (
        <a href={url}>
          <img src={src} className={imgClass} alt={alt} />
        </a>
      ) : (
        <img src={src} className={imgClass} alt={alt} />
      )}
    </div>
  );
};

DevelopedByLogo.propTypes = {
  src: PropTypes.string.isRequired,
  url: PropTypes.string,
  alt: PropTypes.string,
  imgClass: PropTypes.string
};
