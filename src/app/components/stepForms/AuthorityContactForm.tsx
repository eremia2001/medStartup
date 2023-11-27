import React from 'react';
import StepForm from '../StepForm';

import Checklist from '../Checkliste';

const AuthorityContactForm = ({ number }) => {
  // Download-Funktion

  return (
    <div className="">
      <StepForm
        title={`${number}. Behörde`}
        specialTitle="kontaktieren"
        subtitle="Bitte kontaktieren Sie folgende Behörde um nähere Informationen zu ihren Medikamenten zu erhalten "
      >
        <div className="flex flex-col mx-auto ">
          <p>
            <span className="font-bold">Telefon : </span> (66) 2590 7346{' '}
          </p>
          <p>
            <span className="font-bold">Email :</span> drug.fda-moph.go.th
          </p>
        </div>

        <p className="mt-10 text-xs mx-auto ">
          <span className="font-bold">Hinweis :</span> Dieses Formular müssen
          Sie von ihrem Arzt unterschreiben lassen !{' '}
        </p>
      </StepForm>
    </div>
  );
};

export default AuthorityContactForm;
