import React from "react";
import PropTypes from "prop-types";
import "./search-result-list-item.styles.scss";

export const SearchResultListItem = ({
  date,
  title,
  readMoretext,
  readMoreLink,
  children,
  color
}) => {
  return (
    <div className={`searchResult ${color}`}>
      <time className="searchResult__date" dateTime={date}>
        {date}
      </time>
      <h2 className="searchResult__title">{title}</h2>
      {children}

      {readMoretext && (
        <div className="has-text-right searchResult__moreLink">
          <a href={readMoreLink}>{readMoretext}</a>
        </div>
      )}
    </div>
  );
};

SearchResultListItem.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  readMoretext: PropTypes.string,
  readMoreLink: PropTypes.string,
  color: PropTypes.oneOf(["cyan", "blue"])
};
