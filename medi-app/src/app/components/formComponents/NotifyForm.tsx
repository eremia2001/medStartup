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
        (endForm == 'gelb' && (
          <WarnungForm handlePriorForm={handlePriorForm} />
        ))}
      {/* Hier könnten Sie auch die WarnungForm einfügen, falls benötigt */}
    </>
  );
};

export default NotifyForm;
