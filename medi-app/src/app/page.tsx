"use client";
import Image from "next/image";
import WomanIlustration from "./assets/illustration woman.png";
import WomanIlustration2 from "./assets/illustration woman2.png";
import crosses from "./assets/kreuze.png";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMedication } from "./hooks/useMedication";
import { useFormHandling } from "./hooks/useFormHandling";
import { useToast } from "./hooks/useToast";
import {
  CountryForm,
  DurationForm,
  MedicationForm,
  GuteReiseForm,
  WarnungForm,
} from "./components/formComponents";

export default function Home() {
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
      handleSelectChange={handleSelectChange}
      handleInput={handleInput}
      handlingMedForm={handlingMedForm}
      handlePriorForm={switchToPriorForm}
      checkMedication={checkMedication}
      allMeds={allMeds}
      deleteMed={deleteMed}
      errorMsg={errorMsg}
    />,
    <GuteReiseForm
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
    <WarnungForm
      handleSumbitForm={switchToNextForm}
      handlePriorForm={switchToPriorForm}
    />,
  ];

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
        medication: "",
        medicationQuant: 0,
      }));
    }
  }

  function handlingMedForm(e) {
    e.preventDefault();
    if (allMeds.length === 0) {
      showToast("😦 OH OH ! Du hast kein Medikament eingetragen");
      return;
    }
    const isMedInputEmpty = !formInput.medication && !formInput.medicationQuant;

    if (!isMedInputEmpty) {
      showToast("🤔 Hast du vergessen das Medikament einzutragen ?");
      return;
    }

    switchToNextForm();
  }

  return (
    <main className="flex min-h-screen px-4 flex-col bg-[#F9F9F9] relative">
      <ToastContainer />
      <div className="flex flex-col items-center gap-4 mx-auto mt-20  ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
          Willkommen bei Medicarry !{" "}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          {" "}
          <span className="text-primary">Reisen</span> leicht gemacht{" "}
        </h2>
        <p className="text-subline lg:text-lg">
          Informieren, einpacken und los! Ihr Gesundheitsbegleiter auf jeder
          Reise.
        </p>
      </div>

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
    </main>
  );
}
