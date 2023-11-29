'use client';
import { FaArrowLeft } from 'react-icons/fa';
import Button from '../components/Button';
import InputField from './InputField';
import { FormProps } from '../types';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Form({
  title,
  inputFields,
  handleSumbitForm,
  id,
  handlePriorForm,
  children,
  functionality,
}) {
  const [errors, setErrors] = useState({});

  // Eine Form kann mehrere Inputs haben und ich will für jede eine Validierung haben
  function isEmpty(obj) {
    for (let prop in obj) {
      // Hat das Objekt eine eigene Eigenschaft?
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  function validateInputs() {
    // Wir gehen jeden Input durch
    let errors = {};
    inputFields.map((inputField) => {
      // Validierung basierend auf dem inputType
      const type = inputField.inputType;
      const value = inputField.value;
      const name = inputField.name;
      console.log('Value of validateInput' + value);

      if (type == 'select' && value == '') {
        errors[name] = 'Eine Auswahl ist erforderlich';
      } else if (type == 'text' && (!value || value.trim() === '')) {
        errors[name] = 'Eingabe darf nicht leer sein';
      } else if (type == 'number' && (value <= 0 || value === '')) {
        errors[name] = 'Eingabe muss größer als 0 sein';
      }
    });

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();

    if (isEmpty(validationErrors)) {
      handleSumbitForm(); // FormSumbit nur wenn die Validatoren stimmen
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={
        functionality == 'medicationInput' ? handleSumbitForm : handleSubmit
      }
      className="relative py-5 md:px-16 px-5  bg-white shadow-2xl rounded-md flex flex-col  max-w-[1080px] mx-auto z-50 "
    >
      {id !== 1 && (
        <motion.div
          onClick={handlePriorForm}
          whileHover={{ scale: 1.3 }}
          className="mb-5 w-fit md:mx-[-45px]"
        >
          <FaArrowLeft
            size={20}
            className="text-secondary font-bold cursor-pointer"
          />
        </motion.div>
      )}
      <h1 className="mx-auto text-[22px] sm:text-2xl  lg:text-3xl font-semibold text-center">
        {title}
      </h1>
      <div className="grid grid-cols-fluid gap-3 mt-10  ">
        {inputFields.map((field) => (
          <InputField
            className={`${inputFields.length === 1 ? '' : ''}`}
            key={field.placeholder}
            errorMessage={errors[field.name]}
            {...field}
          />
        ))}
      </div>
      {children}
      <Button
        title="Weiter"
        bgColor="secondary"
        className="mt-16 px-20 mx-auto"
      />
    </form>
  );
}
