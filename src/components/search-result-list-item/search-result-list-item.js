import React from "react";
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
        {readMoreLink ? <a href={readMoreLink}>{title}</a> : title}
      </h2>
      {children}

      {readMoreText && (
        <div className="has-text-right searchResult__moreLink">
          <a href={readMoreLink}>{readMoreText}</a>
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
