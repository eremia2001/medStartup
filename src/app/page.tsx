'use client';
import Image from 'next/image';
import WomanIlustration from './assets/illustration woman.png';
import WomanIlustration2 from './assets/illustration woman2.png';
import earth3d from './assets/earth3d.png';
import plane from './assets/airplane.jpg';
import crosses from './assets/kreuze.png';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMedication } from './hooks/useMedication';
import { useFormHandling } from './hooks/useFormHandling';
import { useMedOptions } from './hooks/useMedOptions';
import { useFinalForm } from './hooks/useFinalForm';
import { fetchMedicationStatus } from '../app/utils/api';
import { Nunito } from 'next/font/google';
import Demo from './pageComponents/Demo';
import HowTo from './pageComponents/HowTo';
import Vision from './pageComponents/Vision';
import { useToast } from './hooks/useToast';
import Title from './components/Title';
import Service from './pageComponents/Service';
import Contact from './pageComponents/Contact';
import { MdKeyboardArrowUp } from 'react-icons/md';
import FAQSection from './pageComponents/FAQSection';
import Footer from './pageComponents/Footer';
import { Link as Link2 } from 'react-scroll';

import {
  CountryForm,
  DurationForm,
  MedicationForm,
  NotifyForm,
} from './components/formComponents';
import { useEffect, useState } from 'react';
import { resolve } from 'path';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
const inter = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [apiResult, setApiResult] = useState([]);
  const { allMeds, addMedication, deleteMed, errorMsg } = useMedication();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { showToast } = useToast();
  const { checkFinalForm, finalForm } = useFinalForm();
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
      key={1}
      inputValue={formInput.country}
      onInputChange={handleSelectChange}
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
    <DurationForm
      key={2}
      inputValue={formInput.travelDuration}
      onInputChange={handleInput}
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
    <MedicationForm
      key={3}
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
      key={4}
      handlePriorForm={switchToPriorForm}
      endForm={finalForm}
      medList={allMeds}
      apiResult={apiResult}
      deleteMed={deleteMed}
    />,
  ];

  useEffect(() => {
    // Setzt den isClient-Status, sobald der Client geladen ist
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Diese Logik wird nur auf dem Client ausgeführt
    if (isClient) {
      setDefaultOptions();
      showToast('Achtung ! unser Demo ist zurzeit in der Beta-Version');
    }
  }, [isClient]); // Abhängigkeit von isClient
  useEffect(() => {
    checkFinalForm(apiResult);
  }, [apiResult]);
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScrollButton]);

  const checkScrollTop = () => {
    if (!showScrollButton && window.pageYOffset > 300) {
      // Zeige den Button, wenn der Nutzer mehr als 300px gescrollt hat
      setShowScrollButton(true);
    } else if (showScrollButton && window.pageYOffset <= 300) {
      // Verberge den Button, wenn der Nutzer weniger als 300px gescrollt hat
      setShowScrollButton(false);
    }
  };

  function handleMedDefaultOpt(value: Number, name: String) {
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
      const data = loadData();
      data.then((result) => setApiResult(result));
      checkFinalForm(apiResult);
      switchToNextForm();
    } catch (error) {
      showToast('😦 Fehler beim Abrufen des Medikamentenstatus');
    }
  }

  async function loadData() {
    const data = await fetchMedicationStatus({
      country: formInput.country,
      tripDuration: formInput.travelDuration,
      medications: allMeds,
    });
    return data;
  }
  useEffect(() => {
    const data = loadData();
    data.then((result) => setApiResult(result));
    checkFinalForm(apiResult);
  }, [allMeds]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Ändern Sie den Threshold-Wert nach Bedarf
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Ändern Sie den Threshold-Wert nach Bedarf
  });
  return (
    <main
      className={`flex min-h-screen p-4 pb-10 flex-col bg-[#F9F9F9] relative  ${inter.className}`}
      id="demo"
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
              {/* <Image
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
              /> */}
              <div className="flex flex-col items-center gap-2 mx-auto mt-10 text-center  ">
                <Title title="Willkommen bei moouv ! " />

                <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold">
                  <span className="text-primary">Reisen</span> leicht gemacht{' '}
                </h2>

                <p className="text-subline  lg:text-lg ">
                  Informieren, einpacken und los! Ihr Gesundheitsbegleiter auf
                  jeder Reise.
                </p>
              </div>
            </motion.div>
            {/* Wiederholen Sie dies für die anderen Bilder mit entsprechenden Anpassungen */}
          </>
        )}
      </AnimatePresence>

      <Demo formNumber={formNumber} formList={formList} />
      <HowTo inView={inView} ref={ref} />
      <Vision inView={inView2} ref={ref2} />
      <Service />
      <FAQSection />
      <Contact />
      <Link2 to="demo" smooth={true} duration={300}>
        <motion.div
          className={`${
            showScrollButton ? 'cursor-pointer' : 'cursor-none'
          } p-3 rounded-full fixed bottom-10 right-5 border border-[#D9D9D9] bg-white hover:bg-secondary shadow-md hover:text-white duration-300 ease-in-out`}
          animate={
            showScrollButton ? { opacity: 1 } : { opacity: 0, display: 'none' }
          }
          transition={{ duration: 0.3 }}
        >
          <MdKeyboardArrowUp size={20} />
        </motion.div>
      </Link2>
    </main>
  );
}
