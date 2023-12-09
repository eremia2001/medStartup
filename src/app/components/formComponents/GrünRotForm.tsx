// components/GelbForm.js
import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Status from '../Status';

function GelbForm({
  handleSumbitForm,
  handlePriorForm,
  medList,
  apiResult,
  deleteMed,
}) {
  return (
    <Form
      title="Achtung Reiseinformation ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold text-center mt-[-35px]">
        Einige Medikamente erfordern{' '}
        <span className="font-bold text-[#D63031]"> zusätzliche Dokumente</span>{' '}
        für Thailand
      </p>

      <div className="flex flex-row  items-center  flex-wrap mt-10 justify-center ">
        <Status apiResult={apiResult} medList={medList} deleteMed={deleteMed} />
      </div>
    </Form>
  );
}

export default GelbForm;
