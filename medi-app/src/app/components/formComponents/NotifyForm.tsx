import React from 'react';
import {
  CountryForm,
  DurationForm,
  MedicationForm,
  GuteReiseForm,
  WarnungForm,
} from '../formComponents';

const NotifyForm = ({ handlePriorForm, endForm, medList }) => {
  return (
    <>
      {(endForm === 'grün' && (
        <GuteReiseForm handlePriorForm={handlePriorForm} medList={medList} />
      )) ||
        (endForm == 'rot' && (
          <WarnungForm handlePriorForm={handlePriorForm} medList={medList} />
        ))}
      {/* Hier könnten Sie auch die WarnungForm einfügen, falls benötigt */}
    </>
  );
};

export default NotifyForm;
