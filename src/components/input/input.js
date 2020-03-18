import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.scss';
import { Label } from '../label/label';

export const Input = ({
  disabled,
  label,
  type,
  name,
  size,
  color,
  rounded,
  usePlaceholder,
  loading,
  defaultValue,
  onChange
}) => {
  const inputClassNames = ['input'];
  const controlClassNames = ['control'];
  if (size) inputClassNames.push(`is-${size}`);
  if (color) inputClassNames.push(`is-${color}`);
  if (rounded) inputClassNames.push('is-rounded');
  if (loading) controlClassNames.push('is-loading');
  const inputClasses = inputClassNames.join(' ');

  return (
    <div className="field">
      {!usePlaceholder && <Label text={label} />}
      <div className={controlClassNames.join(' ')}>
        {!usePlaceholder ? (
          <input
            className={inputClasses}
            type={type}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        ) : (
          <input
            className={inputClasses}
            type={type}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
            placeholder={usePlaceholder ? label : ''}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  defaultValue: PropTypes.string,
  usePlaceholder: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
};

Input.defaultProps = {
  label: 'Input',
  type: 'text',
  disabled: false,
  loading: false,
  rounded: false,
  usePlaceholder: false
};
