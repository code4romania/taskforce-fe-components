import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({
  children,
  onClick,
  color,
  size,
  disabled,
  inverted,
  type
}) => {
  const classNames = ["button"];

  if (color) {
    classNames.push(`is-${color}`);
  }

  if (size) {
    classNames.push(`is-${size}`);
  }

  if (inverted) {
    classNames.push("is-outlined");
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames.join(" ")}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["primary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
  color: "primary",
  disabled: false,
  inverted: false,
  type: "button"
};
