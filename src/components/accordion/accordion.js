import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ArrowDown from "../../icons/arrow-down.svg";
import "./accordion.scss";

export const Accordion = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="message">
      <div
        className={classNames("message-header __accordion-header", {
          "__accordion-header--expanded": showContent
        })}
        onClick={() => setShowContent(!showContent)}
      >
        {title}
        <div className="__accordion-arrow">
          <ArrowDown />
        </div>
      </div>
      {showContent && <div className="message-body">{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};
