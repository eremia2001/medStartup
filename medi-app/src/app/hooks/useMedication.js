// hooks/useMedication.js
import { useState } from "react";

export function useMedication() {
  const [allMeds, setAllMeds] = useState([]);

  function addMedication(medication, quantity) {
    setAllMeds((prevMeds) => [...prevMeds, { medication, amount: quantity }]);
  }

  function deleteMed(medIndex) {
    const newMedList = allMeds.slice();
    newMedList.splice(medIndex, 1);
    setAllMeds(newMedList);
  }

  return {
    allMeds,
    addMedication,
    deleteMed,
  };
}
