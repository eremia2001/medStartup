import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';

const DownloadForm = ({ number }) => {
  // Download-Funktion
  const fileUrl = '/Reiseformular.pdf';

  return (
    <div className="">
      <StepForm
        title={`${number}. Formular`}
        specialTitle="herunterladen"
        subtitle="Beginnen Sie mit dem ersten Schritt zur Vorbereitung Ihrer Medikamente"
      >
        <a
          className="custom-dashed-border w-full text-subline flex flex-col justify-center items-center gap-2 p-10 cursor-pointer"
          href={fileUrl}
          download={true}
        >
          <FaDownload size={50} className="text-secondary w-10 md:w-3/4" />
          <p className="text-xs text-subline text-center md:text-base italic ">
            Klicken Sie hier, um das Formular herunterzuladen
          </p>
        </a>
      </StepForm>
    </div>
  );
};

export default DownloadForm;
