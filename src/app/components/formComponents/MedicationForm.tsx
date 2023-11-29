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
          errorMessage: errorMsg.medicationError,
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
          errorMessage: errorMsg.quantityError,
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
        className="mt-5 bg-secondary text-lg   text-white rounded-lg w-fit px-3 mx-auto sm:mx-0  "
      >
        Hinzufügen
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
          <span> {med.name}</span>
          <div className="flex items-center">
            <span> {med.amount}</span>
            <BsTrash
              className="translate-x-3 md:translate-x-10  cursor-pointer text-lg md:text-xl lg:text-2xl text-secondary "
              onClick={() => deleteMed(index)}
            />
          </div>
        </div>
      ))}
    </Form>
  );
}

export default MedicationForm;
