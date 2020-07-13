import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import { List } from "../list/list";
import { ListHeader } from "../list-header/list-header";
import { ListItem } from "../list-item/list-item";

function StaticText({ title, description }) {
  return (
    <div>
      <ListHeader title={title} />
      <List>
        <ListItem nonOption={true} title={description} />
      </List>
    </div>
  );
}

StaticText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default StaticText;
