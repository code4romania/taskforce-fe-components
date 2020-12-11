import React from "react";
import PropTypes from "prop-types";

export const BannerImage = ({ image: {src, alt, title}, link }) => {
  return (
    <div>
      {link ?
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={alt} title={title}/>
        </a>
        :
        <img src={src} alt={alt} title={title}/>
      }
    </div>
  );
};

BannerImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  link: PropTypes.string
};

BannerImage.defaultProps = {
  link: null
}


