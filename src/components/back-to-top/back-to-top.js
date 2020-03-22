import React from "react";
import PropTypes from "prop-types";
import ScrollToTop from "react-scroll-up";
import { FiArrowUpCircle } from "react-icons/fi";

const BackToTop = ({ bottom, right, circleWidth, circleHeight, showUnder }) => {
  return (
    <ScrollToTop showUnder={showUnder} style={{ bottom: bottom, right: right }}>
      <FiArrowUpCircle
        style={{ width: `${circleWidth}px`, height: `${circleHeight}px` }}
      />
    </ScrollToTop>
  );
};

export default BackToTop;

BackToTop.propTypes = {
  bottom: PropTypes.number,
  right: PropTypes.number,
  circleWidth: PropTypes.number,
  circleHeight: PropTypes.number,
  showUnder: PropTypes.number
};

BackToTop.defaultProps = {
  bottom: 50,
  right: 30,
  circleWidth: 50,
  circleHeight: 50,
  showUnder: 100
};
