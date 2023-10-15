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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMedication } from "./hooks/useMedication";

export default function Home() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [formNumber, setFormNumber] = useState(1);
  const [formInput, setFormInput] = useState({
    medication: "",
    medicationQuant: 0,
    travelDuration: "",
    country: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    medicationError: "",
    quantityError: "",
  });
  const { allMeds, addMedication, deleteMed } = useMedication();

  const formList = [
    <Form
      title="Wohin wollen Sie reisen ?"
      inputFields={[
        {
          IconComponent: PiAirplaneLandingFill,
          placeholder: "Flug",
          name: "country",
          value: formInput.country,
          inputType: "text",
          onInputChange: handleInput,
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
          name: "travelDuration",
          onInputChange: handleInput,
          inputType: "number",
          value: formInput.travelDuration,
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
          value: formInput.medication,
          name: "medication",
          onInputChange: handleInput,
          addingError: errorMsg.medicationError,
        },
        {
          IconComponent: GoNumber,
          placeholder: "Anzahl",
          inputType: "number",
          value: formInput.medicationQuant,
          name: "medicationQuant",
          onInputChange: handleInput,
          addingError: errorMsg.quantityError,
        },
      ]}
      handleSumbitForm={checkData}
      key={3}
      id={3}
      functionality="medicationInput"
      handlePriorForm={switchToPriorForm}
    >
      <button
        onClick={checkMedication}
        type="button"
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

  function handleInput(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }

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

  function checkMedication() {
    // TODO : adding backend Logic
    setErrorMsg({ ...errorMsg, medicationError: "", quantityError: "" });
    let medicationError = "";
    let quantityError = "";

    if (formInput.medication == "") {
      medicationError = "Eingabe darf nicht leer sein";
    }

    if (formInput.medicationQuant == 0) {
      quantityError = "Eingabe muss größer als 0 sein";
    }

    if (medicationError || quantityError) {
      setErrorMsg({
        ...errorMsg,
        medicationError: medicationError,
        quantityError: quantityError,
      });
    } else {
      addMedication(formInput.medication, formInput.medicationQuant);
      setFormInput({ ...formInput, medication: "", medicationQuant: 0 });
    }
  }

  function checkData(e) {
    e.preventDefault();
    console.log(allMeds.length);
    if (allMeds.length > 0) {
      if (formInput.medication || formInput.medicationQuant) {
        toast.warn("🤔 Hast du vergessen das Medikament einzutragen ? ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      switchToNextForm();
    } else {
      toast.warn("😦 OH OH ! Du hast kein Medikament eingetragen", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
