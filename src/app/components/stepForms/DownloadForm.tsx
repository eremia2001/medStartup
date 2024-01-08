import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';
import Checklist from '../Checkliste';

const DownloadForm = ({ number, medChecklist }) => {
  // Download-Funktion
  const fileUrl = '/Reiseformular.pdf';

  return (
    <div className="">
      <StepForm
        title={`${number}. Formular`}
        specialTitle="herunterladen & ausfüllen"
        subtitle="Folgende Medikamente müssen Sie in das Formular eintragen und von einem Arzt bestätigen & abstempeln lassen"
      >
        <Checklist items={medChecklist} />

        <a
          className="custom-dashed-border w-full text-subline flex flex-col justify-center items-center gap-2 p-10 cursor-pointer mt-10"
          href={fileUrl}
          download={true}
        >
          <FaDownload size={50} className="text-secondary w-10 md:w-3/4" />
          <p className="text-xs text-subline text-center md:text-base italic ">
            Klicken Sie hier, um das Formular herunterzuladen
          </p>
        </a>
        <p className="mt-10 text-xs lg:text-sm xl:text-base mx-auto ">
          <span className="font-bold">Hinweis :</span> Dieses Formular müssen
          Sie von ihrem Arzt unterschreiben lassen !{' '}
        </p>
      </StepForm>
    </div>
  );
};

export default DownloadForm;
