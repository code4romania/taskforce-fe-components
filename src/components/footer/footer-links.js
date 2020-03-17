import React from 'react';
import PropTypes from 'prop-types';
import './../../styles.scss';
import './footer.scss';

export const FooterLinks = ({ children }) => {
  return <ul className="useful-links">{children}</ul>;
};

export const FooterLinkHeader = ({ children }) => {
  return <li className="footer-links-header">{children}</li>;
};

export const FooterLinkItem = ({ children }) => {
  return <li>{children}</li>;
};

FooterLinks.propTypes = {
  children: PropTypes.node.isRequired
};

FooterLinkHeader.propTypes = {
  children: PropTypes.node.isRequired
};

FooterLinkItem.propTypes = {
  children: PropTypes.node.isRequired
};
