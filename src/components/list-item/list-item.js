import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tick from "../../icons/tick.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import "./list-item.styles.scss";

export const ListItem = ({
  title,
  active,
  hasNext,
  value,
  onClick,
  nonOption
}) => {
  const onClickCb = () => {
    if (onClick) onClick(value);
  };

  return (
    <div
      className={classNames("__list-item", {
        "__list-item--active": active && !nonOption,
        "__list-item--non-option": nonOption
      })}
      onClick={onClickCb}
    >
      <div className="__list-item__left-side">{!nonOption && <Tick />}</div>
      <div className="__list-item__content">{title}</div>
      {hasNext && (
        <div className="__list-item__right-side">
          <ArrowRight />
        </div>
      )}
    </div>
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
