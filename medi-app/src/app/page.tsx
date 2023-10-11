"use client";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import WomanIlustration from "./assets/illustration woman.png";
import WomanIlustration2 from "./assets/illustration woman2.png";
import crosses from "./assets/kreuze.png";
import Form from "./components/Form";
import { useState } from "react";
import { PiAirplaneLandingFill } from "react-icons/pi";
import { MdMedication } from "react-icons/md";
import { BsCheckCircleFill, BsTrash } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./components/Button";

export default function Home() {
  const [country, setCountry] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const [formNumber, setFormNumber] = useState(1);
  const [medicationInput, setMedicationInput] = useState("");
  const [medicationQuantInput, setMedicationQuantInput] = useState(0);
  const [travelDurationInput, setTravelDurationInput] = useState("");
  const [allMeds, setAllMeds] = useState([]);
  const [medicationError, setMedicationError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const formList = [
    <Form
      title="Wohin wollen Sie reisen ?"
      inputFields={[
        {
          IconComponent: PiAirplaneLandingFill,
          placeholder: "Flug",
          onInputChange: (e) => setCountry(e.target.value),
        },
      ]}
      handleSumbitForm={switchToNextForm}
      key={1}
      id={1}
      functionality="countryInput"
      handlePriorForm={switchToPriorForm}
    />,
    <Form
      title="Wie lange dauert Ihr Aufenthalt ? "
      inputFields={[
        {
          IconComponent: GoNumber,
          placeholder: "Tage",
          onInputChange: (e) => setTravelDurationInput(e.target.value),
          inputType: "number",
          value: travelDurationInput,
        },
      ]}
      handleSumbitForm={switchToNextForm}
      key={2}
      id={2}
      functionality="durationInput"
      handlePriorForm={switchToPriorForm}
    />,
    <Form
      title="Welche Medikamente wollen Sie mitnehmen ? "
      inputFields={[
        {
          IconComponent: MdMedication,
          placeholder: "Medikamente",
          inputType: "text",
          value: medicationInput,
          onInputChange: (e) => setMedicationInput(e.target.value),
          errorMessage: medicationError,
        },
        {
          IconComponent: GoNumber,
          placeholder: "Anzahl",
          inputType: "number",
          value: medicationQuantInput,
          onInputChange: (e) => setMedicationQuantInput(e.target.value),
          errorMessage: quantityError,
        },
      ]}
      handleSumbitForm={checkData}
      key={3}
      id={3}
      functionality="medicationInput"
      handlePriorForm={switchToPriorForm}
    >
      <button
        onClick={addMedication}
        className="mt-5 bg-secondary text-3xl font-bold text-white rounded-lg w-fit px-3 "
      >
        +
      </button>

      <div className="flex flex-row justify-between mt-5 font-bold">
        <span>Medikament </span>
        <span> Anzahl </span>
      </div>

      {allMeds.map((med, index) => (
        <div
          key={index}
          className="flex flex-row justify-between mt-5 font-medium  "
        >
          <span> {med.medication}</span>
          <div className="flex items-center">
            <span> {med.amount}</span>
            <BsTrash
              className="translate-x-10 cursor-pointer text-lg md:text-xl lg:text-2xl text-secondary "
              onClick={() => deleteMed(index)}
            />
          </div>
        </div>
      ))}
    </Form>,
    <Form
      title="Gute Reise ! "
      inputFields={[]}
      handleSumbitForm={switchToNextForm}
      key={4}
      id={4}
      functionality="countryInput"
      handlePriorForm={switchToPriorForm}
    >
      <p className="text-subline mx-auto text-sm">
        Unsere Datenbank hat keine Auffäligkeiten aufgezeigt
      </p>
      <BsCheckCircleFill className="mx-auto text-green-600 text-[150px] mt-10" />
      <p className="text-subline mx-auto text-sm mt-5">
        <span className="text-red-500 font-semibold">Hinweis : </span>
        Medikamente in Originalverpackung mitführen & nehmen Sie zur Sicherheit
        sofern benötigt immer ihren Medikamentenplan mit
      </p>
    </Form>,
    <Form
      title="Oh Nein ! "
      inputFields={[]}
      handleSumbitForm={switchToNextForm}
      key={4}
      id={4}
      functionality="countryInput"
      handlePriorForm={switchToPriorForm}
    >
      <p className="text-subline mx-auto text-sm">
        Unsere Datenbank hat Auffäligkeiten aufgezeigt
      </p>
      <AiFillCloseCircle className="mx-auto text-error text-[150px] mt-10" />
      <p className="text-subline mx-auto text-sm mt-5">
        <span className="text-red-500 font-semibold">Hinweis : </span>
        Medikamente in Originalverpackung mitführen & nehmen Sie zur Sicherheit
        sofern benötigt immer ihren Medikamentenplan mit
      </p>
    </Form>,
  ];

  function switchToNextForm() {
    setBtnClicked(true);
    setTimeout(() => {
      setFormNumber(formNumber + 1); // Nächste Form anzeigen
      setBtnClicked(false); // Animation zurücksetzen
    }, 200); // Wartezeit bis zur nächsten Form
  }

  function switchToPriorForm() {
    setBtnClicked(true);
    setTimeout(() => {
      setFormNumber(formNumber - 1); // Nächste Form anzeigen
      setBtnClicked(false); // Animation zurücksetzen
    }, 200); // Wartezeit bis zur nächsten Form
  }

  function validateInputs() {
    let errors = {
      medicationError: "",
      quantityError: "",
    };

    if (!medicationInput) {
      errors.medicationError = "Medikament darf nicht leer sein!";
    }

    if (medicationQuantInput <= 0) {
      errors.quantityError = "Anzahl muss größer als 0 sein!";
    }

    return errors;
  }

  function addMedication() {
    // TODO : adding backend Logic
    setMedicationError("");
    setQuantityError("");
    const { medicationError, quantityError } = validateInputs();

    if (medicationError || quantityError) {
      setMedicationError(medicationError);
      setQuantityError(quantityError);
      return;
    }

    setAllMeds((prevMeds) => [
      ...prevMeds,
      { medication: medicationInput, amount: medicationQuantInput },
    ]);
    setMedicationInput("");
    setMedicationQuantInput(0);
  }

  function deleteMed(medIndex) {
    // TODO : adding backend Logic
    // Erstelle eine Kopie und keine REFERENZ
    const newMedList = allMeds.slice();
    newMedList.splice(medIndex, 1);
    setAllMeds(newMedList);
  }

  function checkData() {
    switchToNextForm();
  }

  return (
    <main className="flex min-h-screen px-4 flex-col bg-[#F9F9F9] relative">
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
