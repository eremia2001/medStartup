// components/GelbForm.js
import React from 'react';
import Form from '../Form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Check from '../Check';
import Hints from '../Hints';

function GelbForm({ handleSumbitForm, handlePriorForm, medList }) {
  return (
    <Form
      title="Achtung Reiseinformation ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold">
        Einige Medikamente erfordern zusätzliche Dokumente für Thailand
        <span className="font-bold text-succsess">zugelassen</span>
      </p>
    </Form>
  );
}

export default GelbForm;
