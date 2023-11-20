// hooks/useMedication.js
import { useState } from "react";

export function useMedication() {
  const [allMeds, setAllMeds] = useState([]);
  const [errorMsg, setErrorMsg] = useState({
    medicationError: "",
    quantityError: "",
  });

  function addMedication(medication, quantity) {
    if (validateMedication(medication, quantity)) {
      setAllMeds((prevMeds) => [...prevMeds, { name:medication, amount: quantity }]);
      return true;
    }
    return false;
  }

  function deleteMed(medIndex) {
    const newMedList = allMeds.slice();
    newMedList.splice(medIndex, 1);
    setAllMeds(newMedList);
  }
  function validateMedication(medication, quantity) {
    setErrorMsg({ medicationError: "", quantityError: "" });
    const medicationError =
      medication === "" ? "Eingabe darf nicht leer sein" : "";
    const quantityError =
      quantity === 0 ? "Eingabe muss größer als 0 sein" : "";
    if (medicationError || quantityError) {
      setErrorMsg({ medicationError, quantityError });
      return false;
    }
    return true;
  }

  return {
    allMeds,
    addMedication,
    deleteMed,
    errorMsg,
  };
}
