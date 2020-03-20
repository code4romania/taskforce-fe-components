import React, { useState } from "react";
import "./../../styles.scss";
import { FormCreateAccount } from "./form-create-account";

export default { title: "Create Acount Form" };

export const Form = () => {
  const [formData, setFormData] = useState();

  return (
    <form className="form">
      <FormCreateAccount
        label={"Long input"}
        description={"Long input with description"}
        objectChanged={obj => setFormData(obj)}
      />
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
};
