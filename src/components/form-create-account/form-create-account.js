import React, { useState } from "react";
import { Select } from "../select/select";
import { RadioList } from "../radio-list/radio-list";
import languageResouces from "./form-create-account.resources";
import formCreateAccountPropTypes from "./form-create-account.propTypes";
import formCreateAccountDefaultValues from "./form-create-account.defaultProps";

/**
 *
 * @param {*} ageOptions
 * @param {*} genderOptions
 * @param {*} illnesesOptions
 * @param {*} lastPeriodInformationOptions
 */
export const FormCreateAccount = ({
  ageOptions,
  genderOptions,
  illnesesOptions,
  lastPeriodInformationOptions,
  objectChanged,
  countriesList,
  citiesList,
  dataProcessingApprovalText,
  passwordMinLength
}) => {
  const [fullObject, setFullObject] = useState({});
  const [cities, setCities] = useState([]);

  const formControl_OnChange = args => {
    let value =
      args.target.type === "checkbox" ? args.target.checked : args.target.value;
    let changedObj = { ...fullObject, [args.target.name]: value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const lastPeriodOptions_OnChange = args => {
    let changedObj = { ...fullObject, lastPeriodStatus: args };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const country_OnChange = args => {
    let changedObj = { ...fullObject, country: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
    setCities(
      citiesList.filter(city => city.countryCode === args.target.value)
    );
  };

  return (
    <div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">{languageResouces.field_name_label}</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="fullName"
                id="name"
                onChange={formControl_OnChange}
                required="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <div className="field">
            <label className="label">
              {languageResouces.field_emailAddress_label}
            </label>
            <div className="control">
              <input
                type="email"
                className="input"
                name="emailAddress"
                id="emailAddress"
                onChange={formControl_OnChange}
                required="true"
                placeholder="email@address.com"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-half">
          <div className="field">
            <label className="label">
              {languageResouces.field_password_label}
            </label>
            <div className="control">
              <input
                type="password"
                minLength={passwordMinLength}
                className="input"
                name="password"
                id="password"
                onChange={formControl_OnChange}
                required="true"
              />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field">
            <label className="label">
              {languageResouces.field_password2_label}
            </label>
            <div className="control">
              <input
                type="password"
                minLength={passwordMinLength}
                className="input"
                name="password2"
                id="password2"
                onChange={formControl_OnChange}
                required="true"
              />
            </div>
            {fullObject.password &&
              fullObject.password2 &&
              fullObject.password !== fullObject.password2 && (
                <p className="help is-danger">
                  {languageResouces.field_password2_doesNotMatch}
                </p>
              )}
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-2">
          <Select
            label={languageResouces.field_age_label}
            selectProps={{
              name: "ageRange",
              id: "ageRange",
              onChange: formControl_OnChange
            }}
            options={ageOptions}
          />
        </div>
        <div className="column is-2">
          <Select
            label={languageResouces.field_gender_label}
            selectProps={{
              name: "gender",
              id: "gender",
              onChange: formControl_OnChange
            }}
            options={genderOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Select
            label={languageResouces.field_existingHealthConditions_label}
            description={
              languageResouces.field_existingHealthConditions_description
            }
            selectProps={{
              name: "existingHealthConditions",
              id: "existingHealthConditions",
              onChange: formControl_OnChange
            }}
            options={illnesesOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <RadioList
            label={languageResouces.field_lastPeriodInformation_label}
            onChange={lastPeriodOptions_OnChange}
            options={lastPeriodInformationOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <Select
            label={languageResouces.field_country_label}
            selectProps={{
              name: "country",
              id: "country",
              onChange: country_OnChange
            }}
            options={countriesList}
          />
        </div>
        <div className="column is-half">
          <Select
            label={languageResouces.field_city_label}
            selectProps={{
              name: "city",
              id: "city",
              onChange: formControl_OnChange
            }}
            options={cities}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <label className="checkbox">
            <input
              type="checkbox"
              required
              name="acceptConditions"
              id="acceptConditions"
              onChange={formControl_OnChange}
            />
            <span
              dangerouslySetInnerHTML={{ __html: dataProcessingApprovalText }}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

FormCreateAccount.propTypes = formCreateAccountPropTypes;

FormCreateAccount.defaultProps = formCreateAccountDefaultValues;
