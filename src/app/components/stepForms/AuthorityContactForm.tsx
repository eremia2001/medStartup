import React from 'react';
import StepForm from '../StepForm';

import Checklist from '../Checkliste';

const AuthorityContactForm = ({ number, medChecklist }) => {
  // Download-Funktion

  return (
    <div className="">
      <StepForm
        title={`${number}. Behörde`}
        specialTitle="kontaktieren"
        subtitle="folgende Medikamente brauchen eine besondere Genehmigung von der zuständigen Behörde : "
      >
        <Checklist items={medChecklist} />

        <h1 className="font-bold text-2xl mx-auto my-10"> Kontaktdaten</h1>
        <div className="flex flex-col mx-auto gap-2 shadow-2xl p-5">
          <p>
            <span className="font-bold">Telefon : </span> (66) 2590 7346{' '}
          </p>
          <p>
            <span className="font-bold">Email :</span> drug.fda-moph.go.th
          </p>
        </div>
      </StepForm>
    </div>
  );
};

export default AuthorityContactForm;
