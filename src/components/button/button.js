import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({
  children,
  onClick,
  type,
  size,
  inverted,
  disabled
}) => {
  const classNames = ["button"];

  if (type) {
    classNames.push(`is-${type}`);
  }

  if (size) {
    classNames.push(`is-${size}`);
  }

  if (inverted) {
    classNames.push("is-outlined");
  }

  return (
    <button
      onClick={onClick}
      className={classNames.join(" ")}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  inverted: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "primary",
  inverted: false,
  disabled: false
};
