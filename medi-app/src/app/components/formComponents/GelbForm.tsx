// components/GelbForm.js
import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Status from '../Status';
import checklistItems from '../../data/checklistItems';
import Checkliste from '../Checkliste';
import DownloadForm from '../stepForms/DownloadForm';
import FilloutForm from '../stepForms/FilloutForm';
import AuthorityInformForm from '../stepForms/AuthorityInformForm';
import AuthorityContactForm from '../stepForms/AuthorityContactForm';
import ChecklistContainer from '../ChecklistContainer';
function GelbForm({
  handleSumbitForm,
  handlePriorForm,
  medList,
  apiResult,
  deleteMed,
}) {
  const [displayChecklist, setDisplayChecklist] = useState(checklistItems);

  const statusExistsInApiResult = (status) => {
    return Boolean(apiResult.find((element) => element.status === status));
  };

  useEffect(() => {
    // Aktualisieren von displayChecklist, wenn sich apiResult oder checklistItems ändert
    const updatedDisplayChecklist = checklistItems.filter((item) =>
      statusExistsInApiResult(item.status)
    );
    setDisplayChecklist(updatedDisplayChecklist);
  }, [medList, apiResult]);

  function getStatus(medName) {
    const isRot = apiResult.find((element) => {
      return element.name == medName && element.status == 'rot';
    });
    const isGelb = apiResult.find((element) => {
      return element.name == medName && element.status == 'gelb';
    });
    const isOrange = apiResult.find((element) => {
      return element.name == medName && element.status == 'orange';
    });
    if (isRot) {
      return 'rot';
    } else if (isGelb) {
      return 'gelb';
    } else if (isOrange) {
      return 'orange';
    } else {
      return 'grün';
    }
  }

  const filterToStatus = (status) => {
    return medList.filter((med) => getStatus(med.name) == status);
  };

  return (
    <Form
      title="Achtung Reiseinformation ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold">
        Einige Medikamente erfordern{' '}
        <span className="font-bold text-[#D63031]"> zusätzliche Dokumente</span>{' '}
        für Thailand
      </p>

      <div className="flex flex-row  items-center mt-10 justify-between">
        <Status apiResult={apiResult} medList={medList} deleteMed={deleteMed} />
        <ChecklistContainer items={displayChecklist} />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div>
          {statusExistsInApiResult('gelb') && (
            <>
              <DownloadForm />
              <FilloutForm medChecklist={filterToStatus('gelb')} />
            </>
          )}
          {statusExistsInApiResult('orange') && (
            <>
              <AuthorityInformForm medChecklist={filterToStatus('orange')} />
              <AuthorityContactForm />
            </>
          )}
        </div>
      </div>
    </Form>
  );
}

export default GelbForm;
