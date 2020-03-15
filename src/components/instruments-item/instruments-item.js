import React from "react";
import PropTypes from "prop-types";
import "./instruments-item.scss";

export const InstrumentsItem = ({
  color,
  title,
  content,
  ctaText,
  ctaClassName,
  onClick
}) => {
  const showContent = content != null || ctaText != null;

  return (
    <div className="info-card">
      <div className="card-title" style={color && { borderColor: color }}>
        {title}
      </div>
      {showContent && (
        <div className="card-content">
          {content && <p>{content}</p>}
          {ctaText && (
            <button
              className={ctaClassName}
              style={color && { backgroundColor: color }}
              onClick={onClick}
            >
              {ctaText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

InstrumentsItem.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  ctaText: PropTypes.string,
  ctaClassName: PropTypes.string,
  onClick: PropTypes.func
};

InstrumentsItem.defaultProps = {
  color: "#05d6c7"
};
