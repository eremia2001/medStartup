// components/GuteReiseForm.js
import React from 'react';
import Form from '../Form';
import { AiFillCloseCircle } from 'react-icons/ai';
import Check from '../Check';
import Hints from '../Hints';

function GuteReiseForm({ handleSumbitForm, handlePriorForm, medList }) {
  return (
    <Form
      title="Wichtige Reiseinformation "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold">
        Ihre Medikamente sind nicht
        <span className="font-bold text-[#D63031]"> zugelassen</span>
      </p>
      <div className="flex flex-row  p-5 mt-5 bg-[#D63031] bg-opacity-80 text-white gap-5">
        <AiFillCloseCircle className=" my-auto text-[200px]" />
        <div className=" flex flex-col justify-center ">
          <p className="font-medium text-sm mb-5">
            Folgende Medikamente dürfen auf Grund ihrer Wirkstoffe{' '}
            <span className="font-bold">nicht</span> nach Thailand eingeführt
            werden
          </p>

          <div className="grid grid-cols-fluid gap-2 ">
            {medList.map((med) => {
              return (
                <Check key={med.name} medName={med.name} checked={false} />
              );
            })}
          </div>
        </div>
      </div>
    </Form>
  );
}

export default GuteReiseForm;
