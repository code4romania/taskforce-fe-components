import React from "react";
import PropTypes from "prop-types";
import { Input } from "../input/input";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";
import "../../styles.scss";
import "./login-form.scss";

export class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };
  handleOnSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    return (
      <div className="container __login-form-container">
        <h1 className="subtitle is-2">{this.props.title}</h1>
        <div className="container">
          <Input
            name="email"
            label="Email"
            type="email"
            size="medium"
            onChange={this.handleOnChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            size="medium"
            onChange={this.handleOnChange}
          />
          <div className="container __login-form-options">
            <div>
              <Checkbox name="remember" onChange={this.handleOnChange}>
                Remember me
              </Checkbox>
            </div>
            {this.props.rightContent && <div>{this.props.rightContent}</div>}
          </div>
        </div>
        <div className="container has-text-centered __login-form-button-container">
          <Button size="medium" onClick={this.handleOnSubmit}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.node,
  onSubmit: PropTypes.func
};

LoginForm.defaultProps = {
  title: "LOGIN"
};
