import React from "react";
import PropTypes from "prop-types";
import "./filtered-list-item.styles.scss";
import CaretSvg from "../../../images/icons/caret.svg";

export const FilteredListItem = ({ listItem }) => (
  <div className="__filtered-list-item-container">
    {listItem.label && <div className="label">{listItem.label}</div>}
    <div className="__filtered-list-item">
      <div className="content-section">
        {listItem.rows.map((row, index) => (
          <div className="row" key={index}>
            {row.value}
          </div>
        ))}
      </div>
      <div
        className="icon-section"
        onClick={() => listItem.clickHandler(listItem.data)}
        style={{ background: listItem.styles.iconSectionColor }}
      >
        <CaretSvg />
      </div>
    </div>
  </div>
);

FilteredListItem.propTypes = {
  listItem: PropTypes.object
};
