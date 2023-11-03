// hooks/useFormHandling.js
import { useState } from 'react';

export function useFormHandling() {
  const [formInput, setFormInput] = useState({
    medication: '',
    medicationQuant: 0,
    travelDuration: '',
    country: '',
  });
  const [formNumber, setFormNumber] = useState(1);

  function handleSelectChange(value, name) {
    setFormInput({ ...formInput, [name]: value });
  }

  function handleInput(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }
  function switchToNextForm() {
    setTimeout(() => {
      setFormNumber(formNumber + 1); // Nächste Form anzeigen
    }, 200); // Wartezeit bis zur nächsten Form
  }

  function switchToPriorForm() {
    setTimeout(() => {
      setFormNumber(formNumber - 1); // Nächste Form anzeigen
    }, 200); // Wartezeit bis zur nächsten Form
  }

  // ... (restliche Funktionen)

  return {
    formInput,
    handleSelectChange,
    handleInput,
    switchToNextForm,
    switchToPriorForm,
    formNumber,
    setFormInput,
    // ... (restliche exportierte Werte und Funktionen)
  };
}
