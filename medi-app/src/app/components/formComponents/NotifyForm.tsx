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
      {(endForm === 'gelb' && (
        <GuteReiseForm handlePriorForm={handlePriorForm} />
      )) ||
        (endForm == 'grün' && (
          <WarnungForm handlePriorForm={handlePriorForm} />
        ))}
      {/* Hier könnten Sie auch die WarnungForm einfügen, falls benötigt */}
    </>
  );
};

export default NotifyForm;
