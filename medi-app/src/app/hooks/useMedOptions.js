// hooks/useMedicationHandling.js
import { useState } from 'react';

export function useMedOptions() {
  const [medicationOptions, setMedicationOptions] = useState([]);

  const searchMedications = async (searchString) => {
    try {
      const response = await fetch(`/api/testMed?searchString=${searchString}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      return data;
    } catch (error) {
      console.error('Error fetching medications:', error);
      return [];
    }
  };

  const transformToOptions = (data) => {
    const options = data.map((med) => ({
      value: med.arzneimittelname,
      label: med.arzneimittelname,
    }));
    setMedicationOptions(options);
  };

  const handleMedChange = (value) => {
    const results = searchMedications(value);
    results.then((data) => transformToOptions(data));
  };

  const setDefaultOptions = () => {
    const results = searchMedications('a');
    results.then((data) => transformToOptions(data));
  };

  return {
    medicationOptions,
    handleMedChange,
    setDefaultOptions,
  };
}
