// components/GelbForm.js
import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Status from '../Status';
import checklistItems from '../../data/checklistItems';
import Checkliste from '../Checkliste';
import DownloadForm from '../stepForms/DownloadForm';
import FilloutForm from '../stepForms/FilloutForm';
import AuthorityContactForm from '../stepForms/AuthorityContactForm';
import ChecklistContainer from '../ChecklistContainer';
import { getStatus } from '../../utils/utils';
function GelbForm({
  handleSumbitForm,
  handlePriorForm,
  medList,
  apiResult,
  deleteMed,
}) {
  const [displayChecklist, setDisplayChecklist] = useState(checklistItems);

  const filterToStatus = (statuses) => {
    return medList.filter((med) =>
      statuses.includes(getStatus(apiResult, med.name))
    );
  };
  const statusExistsInApiResult = (status) => {
    return Boolean(apiResult.find((element) => element.status === status));
  };
  const startNumberForGelb = 1;
  const startNumberForOrange = 2;

  useEffect(() => {
    // Aktualisieren von displayChecklist, wenn sich apiResult oder checklistItems ändert
    const updatedDisplayChecklist = checklistItems.filter((item) =>
      statusExistsInApiResult(item.status)
    );
    setDisplayChecklist(updatedDisplayChecklist);
  }, [medList, apiResult]);
  const bothYellowAndOrangeExist =
    statusExistsInApiResult('gelb') && statusExistsInApiResult('orange');
  const yellowAndOrangeMedList = bothYellowAndOrangeExist
    ? filterToStatus(['gelb', 'orange'])
    : [];

  return (
    <Form
      title="Achtung Reiseinformation ! "
      inputFields={[]}
      handleSumbitForm={handleSumbitForm}
      id={4}
      functionality="countryInput"
      handlePriorForm={handlePriorForm}
    >
      <p className="text-subline mx-auto text-sm font-semibold text-center mt-[-35px]">
        Einige Medikamente erfordern{' '}
        <span className="font-bold text-[#D63031]"> zusätzliche Dokumente</span>{' '}
        für Thailand
      </p>

      <div className="flex flex-row  items-center  flex-wrap mt-10 justify-center md:justify-between gap-5">
        <Status apiResult={apiResult} medList={medList} deleteMed={deleteMed} />
        <ChecklistContainer items={displayChecklist} />
      </div>
      <div className=" mt-10">
        <div className="flex flex-col gap-14">
          {bothYellowAndOrangeExist ? (
            <div>
              {' '}
              <DownloadForm
                number={startNumberForGelb}
                medChecklist={yellowAndOrangeMedList}
              />
              <AuthorityContactForm
                medChecklist={filterToStatus(['orange'])}
                number={startNumberForOrange}
              />{' '}
            </div>
          ) : (
            <>
              {statusExistsInApiResult('gelb') && (
                <DownloadForm
                  number={startNumberForGelb}
                  medChecklist={filterToStatus(['gelb'])}
                />
              )}
              {statusExistsInApiResult('orange') && (
                <>
                  <DownloadForm
                    number={startNumberForGelb}
                    medChecklist={filterToStatus(['orange'])}
                  />

                  <AuthorityContactForm
                    number={startNumberForOrange + 1}
                    medChecklist={filterToStatus(['orange'])}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Form>
  );
}

export default GelbForm;
