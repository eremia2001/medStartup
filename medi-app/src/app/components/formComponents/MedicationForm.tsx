// components/MedicationForm.js
import React from 'react';
import Form from '../Form';
import { MdMedication } from 'react-icons/md';
import { GoNumber } from 'react-icons/go';
import { BsTrash } from 'react-icons/bs';
import { medications } from '../../data/medications';
import { useMedication } from '../../hooks/useMedication';
import { useFormHandling } from '../../hooks/useFormHandling';

function MedicationForm({
  handleSelectChange,
  handleInput,
  handlingMedForm,
  handlePriorForm,
  checkMedication,
  formInput,
  allMeds,
  deleteMed,
  errorMsg,
  options,
  handleMedChange,
}) {
  return (
    <Form
      title="Welche Medikamente wollen Sie mitnehmen ? "
      inputFields={[
        {
          IconComponent: MdMedication,
          placeholder: 'Medikamente',
          inputType: 'select',
          value: formInput.medication,
          name: 'medication',
          onInputChange: handleSelectChange,
          addingError: errorMsg.medicationError,
          selectOptions: options,
          handleMedChange: handleMedChange,
        },
        {
          IconComponent: GoNumber,
          placeholder: 'Anzahl',
          inputType: 'number',
          value: formInput.medicationQuant,
          name: 'medicationQuant',
          onInputChange: handleInput,
          addingError: errorMsg.quantityError,
        },
      ]}
      handleSumbitForm={handlingMedForm}
      id={3}
      functionality="medicationInput"
      handlePriorForm={handlePriorForm}
    >
      <button
        onClick={checkMedication}
        type="button"
        className="mt-5 bg-secondary text-3xl font-bold text-white rounded-lg w-fit px-3 "
      >
        +
      </button>

      <div className="flex flex-row justify-between mt-5 font-bold">
        <span>Medikament </span>
        <span> Anzahl </span>
      </div>

      {allMeds.map((med, index) => (
        <div
          key={index}
          className="flex flex-row justify-between mt-5 font-medium  "
        >
          <span> {med.medication}</span>
          <div className="flex items-center">
            <span> {med.amount}</span>
            <BsTrash
              className="translate-x-10 cursor-pointer text-lg md:text-xl lg:text-2xl text-secondary "
              onClick={() => deleteMed(index)}
            />
          </div>
        </div>
      ))}
    </Form>
  );
}

export default MedicationForm;
