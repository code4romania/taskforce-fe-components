import React, { useState } from "react";
import PropTypes from "prop-types";
import "./form-create-account.scss";
import { TextInput } from "../text-input/text-input";
import { Select } from "../select/select";
import { RadioList } from "../radio-list/radio-list";
import { PasswordWithConfirm } from "../password-with-confirm/password-with-confirm";

export const FormCreateAccount = ({
  ageOptions,
  genderOptions,
  illnesesOptions,
  lastPeriodInformationOptions,
  objectChanged
}) => {
  const [fullObject, setFullObject] = useState({});

  // const ageOptions = [
  //   { key: "10", value: "10" },
  //   { key: "20", value: "20" },
  //   { key: "30", value: "30" }
  // ];

  // const genderOptions = [
  //   { key: "M", value: "Masculin" },
  //   { key: "F", value: "Feminin" },
  //   { key: "O", value: "Altul" }
  // ];
  // const illnesesOptions = [
  //   { key: "M", value: "Masculin" },
  //   { key: "F", value: "Feminin" },
  //   { key: "O", value: "Altul" }
  // ];

  // const optiuniUltimaPerioada = [
  //   { key: "Auto izolare", value: "Auto izolare" },
  //   { key: "Carantină la domiciliu", value: "Carantină la domiciliu" },
  //   { key: "Carantină specializată", value: "Carantină specializată" },
  //   { key: "Niciuna", value: "Niciuna" }
  // ];

  const nameChanged = function(args) {
    let changedObj = { ...fullObject, name: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const emailChanged = function(args) {
    let changedObj = { ...fullObject, email: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const genderOnChange = function(args) {
    let changedObj = { ...fullObject, gender: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const varstaOnChange = function(args) {
    let changedObj = { ...fullObject, varsta: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };
  const existingConditions_OnChange = function(args) {
    let changedObj = { ...fullObject, existingConditions: args.target.value };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const optiuniUltimaPerioada_OnChange = args => {
    let changedObj = { ...fullObject, ultimaPerioada: args };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const agreement_onChange = args => {
    let changedObj = { ...fullObject, agreement: args.target.checked };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  const password_OnChange = args => {
    let changedObj = { ...fullObject, passwordInfo: args };
    objectChanged && objectChanged(changedObj);
    setFullObject(changedObj);
  };

  return (
    <div>
      <div className="columns">
        <div className="column">
          <TextInput
            label={"Nume și prenume"}
            inputProps={{
              onChange: nameChanged,
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
              onChange: emailChanged,
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
            props={{
              onChange: varstaOnChange
            }}
            options={ageOptions}
          />
        </div>
        <div className="column is-2">
          <Select
            label={"Gen"}
            props={{
              onChange: genderOnChange
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
            props={{
              onChange: existingConditions_OnChange
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
        <div className="column">
          <label className="checkbox">
            <input type="checkbox" required onChange={agreement_onChange} />
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
  ageOptions: PropTypes.node.required,
  genderOptions: PropTypes.node.required,
  illnesesOptions: PropTypes.node.required,
  lastPeriodInformationOptions: PropTypes.node.required
};

FormCreateAccount.defaultProps = {
  ageOptions: [
    { key: "10", value: "10" },
    { key: "20", value: "20" },
    { key: "30", value: "30" }
  ],
  genderOptions: [
    { key: "M", value: "Masculin" },
    { key: "F", value: "Feminin" },
    { key: "O", value: "Altul" }
  ],
  illnesesOptions: [
    { key: "Boli Cronice", value: "Boli Cronice" },
    { key: "Diabet", value: "Diabet" },
    { key: "Hipertensiune", value: "Hipertensiune" }
  ],
  lastPeriodInformationOptions: [
    { key: "Auto izolare", value: "Auto izolare" },
    { key: "Carantină la domiciliu", value: "Carantină la domiciliu" },
    { key: "Carantină specializată", value: "Carantină specializată" },
    { key: "Niciuna", value: "Niciuna" }
  ]
};
