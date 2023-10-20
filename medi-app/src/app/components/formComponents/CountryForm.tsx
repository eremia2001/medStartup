// components/CountryForm.js
import React from "react";
import Form from "../Form";
import { PiAirplaneLandingFill } from "react-icons/pi";
import { countries } from "../../data/countries";

function CountryForm({
  onInputChange,
  handleSumbitForm,
  handlePriorForm,
  inputValue,
}) {
  return (
    <Form
      title="Wohin wollen Sie reisen ?"
      inputFields={[
        {
          IconComponent: PiAirplaneLandingFill,
          placeholder: "Flug",
          name: "country",
          value: inputValue,
          inputType: "select",
          onInputChange: onInputChange,
          selectOptions: countries,
        },
      ]}
      handleSumbitForm={handleSumbitForm}
      id={1}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    />
  );
}

export default CountryForm;
