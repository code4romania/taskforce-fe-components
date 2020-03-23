import React, { useState } from "react";
import { FormInput } from "../form-input/form-input";
import { Select } from "../select/select";
import { RadioList } from "../radio-list/radio-list";
import { PasswordWithConfirm } from "../password-with-confirm/password-with-confirm";
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
  dataProcessingApprovalText
}) => {
  const [fullObject, setFullObject] = useState({});
  const [cities, setCities] = useState([]);

  const input_OnChange = args => {
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

  const password_OnChange = args => {
    let changedObj = { ...fullObject, passwordInfo: args };
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
          <FormInput
            label={"Nume și prenume"}
            inputProps={{
              name: "fullName",
              id: "fullName",
              onChange: input_OnChange,
              required: true
            }}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <FormInput
            label={"Adresa de email"}
            inputProps={{
              name: "emailAddress",
              id: "emailAddress",
              onChange: input_OnChange,
              type: "email",
              required: "true"
            }}
          />
        </div>
      </div>

      <PasswordWithConfirm onChange={password_OnChange} />

      <div className="columns">
        <div className="column is-2">
          <Select
            label={"Varsta"}
            selectProps={{
              name: "ageRange",
              id: "ageRange",
              onChange: input_OnChange
            }}
            options={ageOptions}
          />
        </div>
        <div className="column is-2">
          <Select
            label={"Gen"}
            selectProps={{
              name: "gender",
              id: "gender",
              onChange: input_OnChange
            }}
            options={genderOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Select
            label="Ai condiții de sănătate preexistente?"
            description="Spune-ne dacă suferi de anumite boli cronice, diabet, hipertensiune etc. "
            selectProps={{
              name: "existingHealthConditions",
              id: "existingHealthConditions",
              onChange: input_OnChange
            }}
            options={illnesesOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <RadioList
            label="În ultima perioada ai fost in:"
            onChange={lastPeriodOptions_OnChange}
            options={lastPeriodInformationOptions}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <Select
            label="Alegeți țara în care vă aflați"
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
            label="Alegeți orașul în care vă aflați"
            selectProps={{
              name: "city",
              id: "city",
              onChange: input_OnChange
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
              onChange={input_OnChange}
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
