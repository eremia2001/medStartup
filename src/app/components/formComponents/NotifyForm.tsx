import React from 'react';
import { GuteReiseForm, WarnungForm, GelbForm } from '../formComponents';

const NotifyForm = ({
  handlePriorForm,
  endForm,
  medList,
  apiResult,
  deleteMed,
}) => {
  return (
    <>
      {(endForm === 'grün' && (
        <GuteReiseForm handlePriorForm={handlePriorForm} medList={medList} />
      )) ||
        (endForm == 'rot' && (
          <WarnungForm handlePriorForm={handlePriorForm} medList={medList} />
        )) ||
        (endForm == 'gelb' && (
          <GelbForm
            handlePriorForm={handlePriorForm}
            medList={medList}
            apiResult={apiResult}
            deleteMed={deleteMed}
          />
        ))}
      {/* Hier könnten Sie auch die WarnungForm einfügen, falls benötigt */}
    </>
  );
};

export default NotifyForm;
