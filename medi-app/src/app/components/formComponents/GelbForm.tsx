// components/GelbForm.js
import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Status from '../Status';
import checklistItems from '../../data/checklistItems';
import Checkliste from '../Checkliste';
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

      <Status apiResult={apiResult} medList={medList} deleteMed={deleteMed} />
      <Checkliste items={displayChecklist} />
    </Form>
  );
}

export default GelbForm;
