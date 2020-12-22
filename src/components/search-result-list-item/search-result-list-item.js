import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./search-result-list-item.scss";

export const SearchResultListItem = ({
  date,
  title,
  readMoreText,
  readMoreLink,
  children,
  color
}) => {
  return (
    <div className={`searchResult ${color}`}>
      {date && (
        <time className="searchResult__date" dateTime={date}>
          {date}
        </time>
      )}
      <h2 className="searchResult__title">
        {readMoreLink ? <Link to={readMoreLink}>{title}</Link> : title}
      </h2>
      {children}

      {readMoreText && (
        <div className="has-text-right searchResult__moreLink">
          <Link to={readMoreLink}>{readMoreText}</Link>
        </div>
      )}
    </div>
  );
};

SearchResultListItem.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  readMoreText: PropTypes.string,
  readMoreLink: PropTypes.string,
  color: PropTypes.oneOf(["cyan", "blue"])
};
