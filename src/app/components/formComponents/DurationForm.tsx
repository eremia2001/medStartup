// components/DurationForm.js
import React from "react";
import Form from "../Form";
import { GoNumber } from "react-icons/go";

function DurationForm({
  onInputChange,
  handleSumbitForm,
  handlePriorForm,
  inputValue,
}) {
  return (
    <Form
      title="Wie lange dauert Ihr Aufenthalt ? "
      inputFields={[
        {
          IconComponent: GoNumber,
          placeholder: "Tage",
          name: "travelDuration",
          value: inputValue,
          inputType: "number",
          onInputChange: onInputChange,
        },
      ]}
      handleSumbitForm={handleSumbitForm}
      id={2}
      functionality="durationInput"
      handlePriorForm={handlePriorForm}
    />
  );
}

export default DurationForm;
