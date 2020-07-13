import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
  TwitterIcon
} from "react-share";
import "./social-share.scss";

export const SocialsShare = ({ currentPage }) => {
  return (
    <div className="__social-share-container">
      <span>Distribuie pe</span>

      <FacebookShareButton url={currentPage}>
        <FacebookIcon round={true} size={30}></FacebookIcon>
      </FacebookShareButton>
      <LinkedinShareButton url={currentPage}>
        <LinkedinIcon round={true} size={30}></LinkedinIcon>
      </LinkedinShareButton>
      <TwitterShareButton url={currentPage}>
        <TwitterIcon round={true} size={30}></TwitterIcon>
      </TwitterShareButton>
    </div>
  );
};

SocialsShare.propTypes = {
  currentPage: PropTypes.string.isRequired
};
