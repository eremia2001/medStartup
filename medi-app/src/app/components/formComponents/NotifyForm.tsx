import React from 'react';
import {
  CountryForm,
  DurationForm,
  MedicationForm,
  GuteReiseForm,
  WarnungForm,
} from '../formComponents';

const NotifyForm = ({ handleSumbitForm, handlePriorForm, endForm }) => {
  return (
    <>
      {endForm}
      {(endForm === 'grün' && (
        <GuteReiseForm handlePriorForm={handlePriorForm} />
      )) ||
        (endForm == 'rot' && <WarnungForm handlePriorForm={handlePriorForm} />)}
      {/* Hier könnten Sie auch die WarnungForm einfügen, falls benötigt */}
    </>
  );
};

export default NotifyForm;
