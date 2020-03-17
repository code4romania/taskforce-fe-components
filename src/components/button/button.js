import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ children, onClick, type, inverted }) => {
  const classNames = ['button'];

  if (type) {
    classNames.push(`is-${type}`);
  }

  if (inverted) {
    classNames.push('is-outlined');
  }

  return (
    <button onClick={onClick} className={classNames.join(' ')}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'danger']),
  inverted: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  inverted: false
};
