import React from 'react';
import StepForm from '../StepForm';
import { FaDownload } from 'react-icons/fa6';

const DownloadForm = () => {
  // Download-Funktion
  const fileUrl = '/Reiseformular.pdf';

  return (
    <div className="">
      <StepForm>
        <a
          className="custom-dashed-border w-full text-subline flex flex-col justify-center items-center gap-2 p-10 cursor-pointer"
          href={fileUrl}
          download={true}
        >
          <FaDownload size={50} className="text-secondary" />
          <p>Klicken Sie hier, um das Formular herunterzuladen</p>
        </a>
      </StepForm>
    </div>
  );
};

export default DownloadForm;
