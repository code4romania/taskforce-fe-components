import React from 'react';
import PropTypes from 'prop-types';
import './instruments-item.scss';

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
    <div className={`info-card is-${color}`}>
      <div className="card-title">{title}</div>
      {showContent && (
        <div className="card-content">
          {content && <p>{content}</p>}
          {ctaText && (
            <button className={ctaClassName} onClick={onClick}>
              {ctaText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

InstrumentsItem.propTypes = {
  color: PropTypes.oneOf(['red', 'pink', 'green']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  ctaText: PropTypes.string,
  ctaClassName: PropTypes.string,
  onClick: PropTypes.func
};

InstrumentsItem.defaultProps = {
  color: 'green'
};
