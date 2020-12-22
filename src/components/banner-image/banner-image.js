import React from "react";
import PropTypes from "prop-types";

const handleClick = ({ path, shouldOpenLinkOnNewPage }) => {
  const windowInstance = window.open(
    path,
    shouldOpenLinkOnNewPage ? "_blank" : "_self"
  );
  windowInstance.focus();
};

export const BannerImage = ({
  image: { src, alt, title, width, height },
  link
}) => (
  <div>
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      {...(!!link && { onClick: () => handleClick(link) })}
    />
  </div>
);

BannerImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,
  link: PropTypes.shape({
    path: PropTypes.string.isRequired,
    shouldOpenLinkOnNewPage: PropTypes.bool
  })
};

BannerImage.defaultProps = {
  link: null
};
