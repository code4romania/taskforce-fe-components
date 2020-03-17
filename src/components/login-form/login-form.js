import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../input/input';
import '../../styles.scss';
import './login-form.scss';

export const LoginForm = ({ title }) => {
  return (
    <div className="__login-form-container">
      <h1 className="subtitle is-1">{title}</h1>
      <Input label="Email" type="email" size="medium" />
      <Input label="Password" type="password" size="medium" />
    </div>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
  title: 'LOGIN'
};
