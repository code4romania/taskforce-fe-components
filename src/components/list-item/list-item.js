import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as Tick } from "../../images/icons/tick.svg";
import { ReactComponent as ArrowRight } from "../../images/icons/arrow-right.svg";
import "./list-item.scss";
import { onEnterOrSpace } from "../../a11y";

export const ListItem = ({
  title,
  active,
  hasNext,
  value,
  onClick,
  nonOption
}) => {
  return (
    <li
      tabIndex={0}
      className={classNames("__list-item", {
        "__list-item--active": active && !nonOption,
        "__list-item--non-option": nonOption
      })}
      onClick={() => onClick && onClick(value)}
      onKeyPress={onEnterOrSpace(() => onClick && onClick(value))}
    >
      <div className="__list-item__left-side">{!nonOption && <Tick />}</div>
      <div
        className="__list-item__content"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {hasNext && (
        <div className="__list-item__right-side">
          <ArrowRight />
        </div>
      )}
    </li>
  );
};

ListItem.defaultProps = {
  active: false,
  nonOption: false,
  hasNext: false
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.object,
  active: PropTypes.bool,
  hasNext: PropTypes.bool,
  nonOption: PropTypes.bool,
  onClick: PropTypes.func
};
