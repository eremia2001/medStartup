// components/GuteReiseForm.js
import React from 'react';
import Form from '../Form';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function GuteReiseForm({ handleSumbitForm, handlePriorForm }) {
  return (
    <Form
      title="Alles klar für ihre Reise ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm">
        Ihre Medikamente sind{' '}
        <span className="font-bold text-succsess">zugelassen</span>
      </p>

      <div className="bg-succsess text-white flex flex-col justify-center relative p-5">
        <p>
          Wir haben Ihre Medikamentenliste überprüft und können bestätigen, dass
          alle ausgewählten Medikamente für Ihre Reise nach Thailand geeignet
          sind.
        </p>
        <p className="text-sm">Folgende Medikamente sind zugelassen : </p>
        <AiOutlineCheckCircle className="absolute left-5" />
      </div>
    </Form>
  );
}

export default GuteReiseForm;
