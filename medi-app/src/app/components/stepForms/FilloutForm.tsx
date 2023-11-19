import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';
import Checkliste from '../Checkliste';
import Checklist from '../Checkliste';

const FilloutForm = ({ medChecklist }) => {
  // Download-Funktion

  return (
    <div className="">
      <StepForm
        title="2. Formular "
        specialTitle="ausfüllen"
        subtitle="für folgende Medikamente müssen Sie unser Formular ausfüllen :"
      >
        <Checklist items={medChecklist} />
      </StepForm>
    </div>
  );
};

export default FilloutForm;
