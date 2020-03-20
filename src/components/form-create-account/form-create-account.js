import React, { useState } from "react";
import PropTypes from "prop-types";
import "./form-create-account.scss";
import { TextInput } from "../text-input/text-input";
import { Select } from "../select/select";
import { RadioList } from "../radio-list/radio-list";
import { PasswordWithConfirm } from "../password-with-confirm/password-with-confirm";

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
  citiesList
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

  const optiuniUltimaPerioada_OnChange = args => {
    let changedObj = { ...fullObject, ultimaPerioada: args };
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
          <TextInput
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
          <TextInput
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
            onChange={optiuniUltimaPerioada_OnChange}
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
            &nbsp;&nbsp;&nbsp; Prin această bifă îți exprimi acordul ca datele
            furnizate de tine prin acest formular să fie procesate exclusiv in
            scopul de a te pune în legătură cu un specialist care să te ajute cu
            problema pentru care cauți soluție.{" "}
            <a href="#" onClick="return false;">
              Aici puteți găsi regulamentul nostru cu privire la prelucrarea
              datelor cu caracter personal.
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

FormCreateAccount.propTypes = {
  objectChanged: PropTypes.func,
  ageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  genderOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  illnesesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  lastPeriodInformationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),

  countriesList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),
  citiesList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      countryCode: PropTypes.string.isRequired
    })
  )
};

FormCreateAccount.defaultProps = {
  ageOptions: [
    { text: "10", value: "10" },
    { text: "20", value: "20" },
    { text: "30", value: "30" }
  ],
  genderOptions: [
    { value: "M", text: "Masculin" },
    { value: "F", text: "Feminin" },
    { value: "O", text: "Altul" }
  ],
  illnesesOptions: [
    { value: "Boli Cronice", text: "Boli Cronice" },
    { value: "Diabet", text: "Diabet" },
    { value: "Hipertensiune", text: "Hipertensiune" }
  ],
  lastPeriodInformationOptions: [
    { value: "Auto izolare", text: "Auto izolare" },
    { value: "Carantină la domiciliu", text: "Carantină la domiciliu" },
    { value: "Carantină specializată", text: "Carantină specializată" },
    { value: "Niciuna", text: "Niciuna" }
  ],
  countriesList: [
    { value: "", text: "" },
    { value: "RO", text: "Romania" },
    { value: "BG", text: "Bulgaria" }
  ],
  citiesList: [
    { value: "Bucuresti", text: "Bucuresti", countryCode: "RO" },
    { value: "Otopeni", text: "Otopeni", countryCode: "RO" },
    { value: "Miercurea Ciuc", text: "Miercurea Ciuc", countryCode: "RO" },
    { value: "Cluj", text: "Cluj", countryCode: "RO" },
    { value: "Sofia", text: "Sofia", countryCode: "BG" },
    { value: "Ruse", text: "Ruse", countryCode: "BG" },
    { value: "Haskovo", text: "Haskovo", countryCode: "BG" }
  ]
};
