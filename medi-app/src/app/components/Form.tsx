"use client";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../components/Button";
import InputField from "./InputField";
import { FormProps } from "../types";
import { motion } from "framer-motion";
import { useState } from "react";

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

      if (type == "text" && !value) {
        errors[name] = "Eingabe darf nicht leer sein";
      }
      if (type == "number" && value <= 0) {
        errors[name] = "Eingabe muss größer als 0 sein";
      }

      console.log(errors);
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
        functionality == "medicationInput" ? handleSumbitForm : handleSubmit
      }
      className="relative py-5 px-16 bg-white shadow-2xl rounded-md flex flex-col  max-w-[800px] mx-auto z-50"
    >
      {id !== 1 && (
        <motion.div
          onClick={handlePriorForm}
          whileHover={{ scale: 1.3 }}
          className="absolute left-5"
        >
          <FaArrowLeft
            size={20}
            className="text-secondary font-bold cursor-pointer"
          />
        </motion.div>
      )}
      <h1 className="mx-auto text-2xl lg:text-3xl">{title}</h1>
      <div className=" w-full grid grid-cols-fluid gap-3">
        {inputFields.map((field) => (
          <InputField
            className={`${inputFields.length === 1 ? "mx-auto" : ""}`}
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
