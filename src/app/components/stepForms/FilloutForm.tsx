import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';
import Checkliste from '../Checkliste';
import Checklist from '../Checkliste';

const FilloutForm = ({ medChecklist, number }) => {
  // Download-Funktion

  return (
    <div className="">
      <StepForm
        title={`${number}. Formular`}
        specialTitle="ausfüllen"
        subtitle="für folgende Medikamente müssen Sie unser Formular ausfüllen :"
      >
        <Checklist items={medChecklist} />
        <p className="mt-10 text-xs mx-auto ">
          <span className="font-bold">Hinweis :</span> Dieses Formular müssen
          Sie von ihrem Arzt unterschreiben lassen !{' '}
        </p>
      </StepForm>
    </div>
  );
};

export default FilloutForm;
