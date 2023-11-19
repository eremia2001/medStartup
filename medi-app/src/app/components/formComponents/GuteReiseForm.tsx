// components/GuteReiseForm.js
import React from 'react';
import Form from '../Form';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Check from '../Check';
import Hints from '../Hints';

function GuteReiseForm({ handleSumbitForm, handlePriorForm, medList }) {
  return (
    <Form
      title="Alles klar für ihre Reise ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold">
        Ihre Medikamente sind{' '}
        <span className="font-bold text-succsess">zugelassen</span>
      </p>
      <div className="flex flex-row  p-5 mt-5 bg-succsess bg-opacity-90 text-white gap-5">
        <AiOutlineCheckCircle className=" my-auto text-[200px]" />
        <div className=" flex flex-col justify-center ">
          <p className="font-medium text-sm">
            Wir haben Ihre Medikamentenliste überprüft und können bestätigen,
            dass alle ausgewählten Medikamente für Ihre Reise nach Thailand
            geeignet sind.
          </p>
          <p className="text-sm mt-2 mb-5 font-light">
            Folgende Medikamente sind zugelassen :
          </p>
          <div className="grid grid-cols-fluid gap-2 ">
            {medList.map((med) => {
              return (
                <Check
                  key={med.medication}
                  medName={med.medication}
                  checked={true}
                />
              );
            })}
          </div>
        </div>
      </div>
      <h1 className="text-black font-semibold text-2xl mx-auto mt-8">
        wichtige Hinweise
      </h1>
      <div className="mt-6 ">
        <Hints />
      </div>
    </Form>
  );
}

export default GuteReiseForm;
