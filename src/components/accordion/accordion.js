import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ArrowDown from "../../images/icons/arrow-down.svg";
import "./accordion.scss";
import { onEnterOrSpace } from "../../a11y";

export const Accordion = ({ title, content, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="message __accordion" tabIndex="0">
      <div
        className={classNames("message-header __accordion-header", {
          "__accordion-header--expanded": showContent
        })}
        onClick={() => setShowContent(!showContent)}
        onKeyPress={onEnterOrSpace(setShowContent(!showContent))}
      >
        <span className="__accordion-title">{title}</span>
        <div className="__accordion-arrow">
          <ArrowDown />
        </div>
      </div>
      {showContent && (
        <div className="message-body">
          <div className="content">{children || content}</div>
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
