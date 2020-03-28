import React from "react";
import PropTypes from "prop-types";
import "./filtered-list.styles.scss";
import { FilteredListItem } from "./filtered-list-item/filtered-list-item";

export class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.config.filter) {
      this.state = { filterValue: props.config.filter.options[0].value };
    }
  }

  handleChange = event => {
    this.props.config.filter.onSelect(event.target.value);
    this.setState({ filterValue: event.target.value });
  };

  render() {
    const { config } = this.props;
    return (
      <div className="__filtered-list">
        <section className="filter-section">
          {config.filter && (
            <div className="field">
              <label className="label">{config.filter.label}</label>
              <div className="control">
                <div className="select">
                  <select
                    value={this.state.filterValue}
                    onChange={this.handleChange}
                  >
                    {config.filter.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          {this.props.children}
        </section>
        <section className="list-section">
          {config.listItems.map((li, index) => (
            <FilteredListItem listItem={li} key={index}></FilteredListItem>
          ))}
        </section>
      </div>
    );
  }
}

FilteredList.defaultProps = {
  config: {}
};

FilteredList.propTypes = {
  config: PropTypes.object,
  children: PropTypes.element
};
