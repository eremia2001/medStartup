'use client';
import Image from 'next/image';
import WomanIlustration from './assets/illustration woman.png';
import WomanIlustration2 from './assets/illustration woman2.png';
import crosses from './assets/kreuze.png';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMedication } from './hooks/useMedication';
import { useFormHandling } from './hooks/useFormHandling';
import { useMedOptions } from './hooks/useMedOptions';
import { fetchMedicationStatus } from '../app/utils/api';
import { Nunito } from 'next/font/google';

import { useToast } from './hooks/useToast';
import {
  CountryForm,
  DurationForm,
  MedicationForm,
  NotifyForm,
} from './components/formComponents';
import { useEffect, useState } from 'react';
const inter = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [finalForm, setFinalForm] = useState('');
  const [apiResult, setApiResult] = useState([]);
  const { allMeds, addMedication, deleteMed, errorMsg } = useMedication();
  const { showToast } = useToast();
  const {
    formInput,
    handleSelectChange,
    handleInput,
    switchToNextForm,
    switchToPriorForm,
    formNumber,
    setFormInput,
  } = useFormHandling();
  const { medicationOptions, handleMedChange, setDefaultOptions } =
    useMedOptions();

  const formList = [
    <CountryForm
      inputValue={formInput.country}
      onInputChange={handleSelectChange}
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
    <DurationForm
      inputValue={formInput.travelDuration}
      onInputChange={handleInput}
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
    <MedicationForm
      formInput={formInput}
      handleSelectChange={handleMedDefaultOpt}
      handleInput={handleInput}
      handlingMedForm={handlingMedForm}
      handlePriorForm={switchToPriorForm}
      checkMedication={checkMedication}
      allMeds={allMeds}
      deleteMed={deleteMed}
      errorMsg={errorMsg}
      options={medicationOptions}
      handleMedChange={handleMedChange}
    />,
    <NotifyForm
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
      endForm={'gelb'}
      medList={allMeds}
    />,

    // Eine gemeinsame Form - KOmponente für alle 3 Farben ?
  ];

  useEffect(() => {
    setDefaultOptions();
  }, []);
  useEffect(() => {
    checkFormSwitch();
  }, [apiResult]);

  function checkFormSwitch() {
    const isRot = apiResult.find((element) => {
      return element.status == 'rot';
    });
    const isGelb = apiResult.find((element) => {
      return element.status == 'gelb';
    });

    if (isRot) {
      setFinalForm('rot');
    } else if (isGelb) {
      setFinalForm('gelb');
    } else {
      setFinalForm('grün');
    }
  }

  function handleMedDefaultOpt(value, name) {
    handleSelectChange(value, name);
    setDefaultOptions();
  }
  function isLastForm() {
    return formNumber === formList.length;
  }

  function checkMedication() {
    // TODO: adding backend Logic
    // Füge Medikament hinzu und setze die Formulareingabe zurück
    const isAdded = addMedication(
      formInput.medication,
      formInput.medicationQuant
    );
    if (isAdded) {
      setFormInput((prevFormInput) => ({
        ...prevFormInput,
        medication: '',
        medicationQuant: 0,
      }));
    }
  }

  async function handlingMedForm(e) {
    e.preventDefault();
    if (allMeds.length === 0) {
      showToast('😦 OH OH ! Du hast kein Medikament eingetragen');
      return;
    }

    const isMedInputEmpty = !formInput.medication && !formInput.medicationQuant;

    if (!isMedInputEmpty) {
      showToast('🤔 Hast du vergessen das Medikament einzutragen ?');
      return;
    }

    // API aufrufen, um den Medikamentenstatus zu überprüfen

    try {
      const data = await fetchMedicationStatus({
        country: formInput.country,
        tripDuration: formInput.travelDuration,
        medications: allMeds,
      });
      setApiResult(data);
      switchToNextForm();
    } catch (error) {
      showToast('😦 Fehler beim Abrufen des Medikamentenstatus');
    }
  }

  return (
    <main
      className={`flex min-h-screen px-4 flex-col bg-[#F9F9F9] relative ${inter.className}`}
    >
      <ToastContainer />
      <AnimatePresence>
        {!isLastForm() && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={crosses}
                alt="."
                width={300}
                height={500}
                className="w-[16vw]  absolute top-20 left-10 hidden xl:block"
              />
              <Image
                src={crosses}
                alt="."
                width={300}
                height={500}
                className=" w-[16vw]  absolute top-20 right-10 hidden xl:block"
              />
              <Image
                src={WomanIlustration}
                alt="."
                width={200}
                height={500}
                className="absolute bottom-20 hidden xl:block"
              />
              <Image
                src={WomanIlustration2}
                alt="."
                width={500}
                height={500}
                className="absolute bottom-20 right-2 hidden xl:block z-0"
              />
              <div className="flex flex-col items-center gap-4 mx-auto mt-20  ">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
                  Willkommen bei Medicarry !{' '}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                  {' '}
                  <span className="text-primary">Reisen</span> leicht gemacht{' '}
                </h2>
                <p className="text-subline lg:text-lg">
                  Informieren, einpacken und los! Ihr Gesundheitsbegleiter auf
                  jeder Reise.
                </p>
              </div>
            </motion.div>
            {/* Wiederholen Sie dies für die anderen Bilder mit entsprechenden Anpassungen */}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          className="mx-auto w-full mt-28"
          key={formNumber}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
        >
          {formList[formNumber - 1]}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
