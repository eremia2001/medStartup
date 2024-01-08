// hooks/useMedication.js
import { useState } from 'react';

export function useFinalForm() {
    const [finalForm, setFinalForm] = useState('');

    function checkFinalForm(apiResult) {
        const isEveryRed = apiResult.every((element) => {
          return element.status == 'rot';
        });
        const isGelb = apiResult.find((element) => {
          return element.status == 'gelb';
        });
        const isOneRed = apiResult.find((element) => {
          return element.status == 'rot';
        });
        const isOrange = apiResult.find((element) => {
          return element.status == 'orange';
        });
    
        if (isEveryRed) {
          setFinalForm('rot');
        } else if (isGelb) {
          setFinalForm('gelb');
        } else if (isOrange) {
          setFinalForm('gelb');
        } else {
          if (allMeds.length > 0 && !isOneRed) {
            setFinalForm('grün');
          } else {
            if (allMeds.length && isOneRed) {
              setFinalForm('grünrot');
            }
          }
        }
      }

  return {
    checkFinalForm,finalForm
  };
}
