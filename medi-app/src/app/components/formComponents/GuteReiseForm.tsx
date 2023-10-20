// components/GuteReiseForm.js
import React from "react";
import Form from "../Form";
import { BsCheckCircleFill } from "react-icons/bs";

function GuteReiseForm({ handleSumbitForm, handlePriorForm }) {
  return (
    <Form
      title="Gute Reise ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm">
        Unsere Datenbank hat keine Auffäligkeiten aufgezeigt
      </p>
      <BsCheckCircleFill className="mx-auto text-green-600 text-[150px] mt-10" />
      <p className="text-subline mx-auto text-sm mt-5">
        <span className="text-red-500 font-semibold">Hinweis : </span>
        Medikamente in Originalverpackung mitführen & nehmen Sie zur Sicherheit
        sofern benötigt immer ihren Medikamentenplan mit
      </p>
    </Form>
  );
}

export default GuteReiseForm;
