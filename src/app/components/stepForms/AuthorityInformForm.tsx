import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';
import Checkliste from '../Checkliste';
import Checklist from '../Checkliste';

const AuthorityInformForm = ({ medChecklist, number }) => {
  // Download-Funktion

  return (
    <div className="">
      <StepForm
        title={`${number}. Behörde`}
        specialTitle="informieren"
        subtitle="folgende Medikamente brauchen eine besondere Genehmigung von der zuständigen Behörde : "
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

export default AuthorityInformForm;
