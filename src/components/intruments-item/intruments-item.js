import React from "react";
import PropTypes from "prop-types";
import "./intruments-item.scss";

export const InstrumentsItem = ({
  color,
  title,
  content,
  ctaText,
  ctaOnClick
}) => {
  return (
    <div className="info-card">
      <div className="card-title" style={color && { borderColor: color }}>
        {title}
      </div>
      <div className="card-content">
        {content && <p>{content}</p>}
        {ctaText && (
          <button
            style={color && { backgroundColor: color }}
            onClick={ctaOnClick}
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

InstrumentsItem.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  ctaText: PropTypes.string,
  ctaOnClick: PropTypes.func
};
