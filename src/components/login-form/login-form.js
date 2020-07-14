import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../input/input";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";
import "./login-form.scss";

export const LoginForm = ({
  title,
  header,
  initialState,
  onSubmit,
  rightContent
}) => {
  const [login, setState] = useState(initialState);

  const handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState(prevLogin => ({
      ...prevLogin,
      [name]: value
    }));
  };

  const handleOnSubmit = () => {
    if (onSubmit) {
      onSubmit(login);
    }
  };

  return (
    <div className="container __login-form-container">
      {header ? (
        <div className="container">{header}</div>
      ) : (
        <h1 className="subtitle is-size-2">{title}</h1>
      )}
      <div className="container">
        <Input
          name="email"
          label="Email"
          type="email"
          defaultValue={login.email}
          size="medium"
          onChange={handleOnChange}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          defaultValue={login.password}
          size="medium"
          onChange={handleOnChange}
        />
        <div className="container __login-form-options">
          <div>
            <Checkbox
              name="remember"
              defaultValue={login.remember}
              onChange={handleOnChange}
            >
              Remember me
            </Checkbox>
          </div>
          {rightContent && <div>{rightContent}</div>}
        </div>
      </div>
      <div className="container has-text-centered __login-form-button-container">
        <Button size="medium" onClick={handleOnSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.node,
  header: PropTypes.node,
  onSubmit: PropTypes.func,
  initialState: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    remember: PropTypes.bool
  })
};

LoginForm.defaultProps = {
  title: "LOGIN",
  initialState: {
    email: "",
    password: "",
    remember: false
  }
};
