// components/OhNeinForm.js
import React from "react";
import Form from "../Form";
import { AiFillCloseCircle } from "react-icons/ai";

function OhNeinForm({ handleSumbitForm, handlePriorForm }) {
  return (
    <Form
      title="Oh Nein ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm">
        Unsere Datenbank hat Auffäligkeiten aufgezeigt
      </p>
      <AiFillCloseCircle className="mx-auto text-error text-[150px] mt-10" />
      <p className="text-subline mx-auto text-sm mt-5">
        <span className="text-red-500 font-semibold">Hinweis : </span>
        Medikamente in Originalverpackung mitführen & nehmen Sie zur Sicherheit
        sofern benötigt immer ihren Medikamentenplan mit
      </p>
    </Form>
  );
}

export default OhNeinForm;
