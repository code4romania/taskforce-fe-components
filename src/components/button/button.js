import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, type, inverted }) => {
  const additionalClasses = [];

  if (type) {
    additionalClasses.push(`is-${type}`);
  }

  if (inverted) {
    additionalClasses.push("is-outlined");
  }

  return (
    <button
      onClick={onClick}
      className={"button is-primary " + additionalClasses.join(" ")}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "danger"]),
  inverted: PropTypes.bool
};
