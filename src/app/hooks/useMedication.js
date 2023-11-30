// hooks/useMedication.js
import { useState } from 'react';

export function useMedication() {
  const [allMeds, setAllMeds] = useState([]);
  const [errorMsg, setErrorMsg] = useState({
    medicationError: '',
    quantityError: '',
  });

  function addMedication(medication, quantity) {
    // Konvertieren Sie die 'quantity' zu einem Integer
    const quantityInt = parseInt(quantity, 10); // '10' ist die Basis für dezimale Zahlen

    // Überprüfen Sie, ob 'quantityInt' eine gültige Zahl ist
    if (isNaN(quantityInt) || quantityInt < 0) {
      // Sie können hier einen Fehler setzen oder eine Fehlerbehandlung durchführen
      setErrorMsg({
        ...errorMsg,
        quantityError: 'Die Menge muss eine gültige Zahl sein',
      });
      return false;
    }

    if (validateMedication(medication, quantityInt)) {
      setAllMeds((prevMeds) => {
        const existingMed = prevMeds.find((med) => med.name === medication);
        if (existingMed) {
          // Medikament existiert bereits, also Quantität aktualisieren
          return prevMeds.map((med) =>
            med.name === medication
              ? { ...med, amount: med.amount + quantityInt }
              : med
          );
        } else {
          // Neues Medikament hinzufügen
          return [...prevMeds, { name: medication, amount: quantityInt }];
        }
      });
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
    setErrorMsg({ medicationError: '', quantityError: '' });
    const medicationError =
      medication === '' ? 'Eingabe darf nicht leer sein' : '';
    const quantityError = quantity <= 0 ? 'Eingabe muss größer als 0 sein' : '';
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
