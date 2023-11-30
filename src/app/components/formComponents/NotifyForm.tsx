import React, { useEffect } from 'react';
import {
  GuteReiseForm,
  WarnungForm,
  GelbForm,
  GrünRotForm,
} from '../formComponents';

const NotifyForm = ({
  handlePriorForm,
  endForm,
  medList,
  apiResult,
  deleteMed,
}) => {
  useEffect(() => {
    if (medList.length == 0) {
      handlePriorForm();
    }
  }, [medList]);

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
        )) ||
        (endForm == 'grünrot' && (
          <GrünRotForm
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
