import React from "react";
import PropTypes from "prop-types";
import "./instruments-item.scss";

export const InstrumentsItem = ({
  color,
  title,
  content,
  ctaText,
  ctaLink,
}) => {
  const showContent = content != null || ctaText != null;

  return (
    <div className={`info-card is-${color}`}>
      <div className="card-title">{title}</div>
      {showContent && (
        <div className="card-content">
          {content && <p>{content}</p>}
          {ctaText && (
            <a
              className="card-button"
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaText}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

InstrumentsItem.propTypes = {
  color: PropTypes.oneOf(["red", "pink", "green", "yellow", "orange", "blue"]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

InstrumentsItem.defaultProps = {
  color: "green",
};
