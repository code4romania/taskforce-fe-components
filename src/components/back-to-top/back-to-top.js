import React from "react";
import PropTypes from "prop-types";
import ArrowUp from "../../images/icons/circle-up.svg";
import "./back-to-top.scss";

export const BackToTop = ({ width, height }) => {
  return (
    <div
      className="back-to-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    >
      <ArrowUp width={width} height={height} />
    </div>
  );
};

BackToTop.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};
BackToTop.defaultProps = {
  width: 40,
  height: 40
};
