"use client";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../components/Button";
import InputField from "./InputField";
import { FormProps } from "../types";
import { motion } from "framer-motion";

export default function Form({
  title,
  inputFields,
  handleSumbitForm,
  id,
  handlePriorForm,
  children,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative py-5 px-16 bg-white shadow-2xl rounded-md flex flex-col  max-w-[800px] mx-auto"
    >
      <motion.div
        onClick={handlePriorForm}
        whileHover={{ scale: 1.3 }}
        className="absolute left-5"
      >
        <FaArrowLeft
          size={20}
          className="text-secondary font-bold cursor-pointer"
        />
      </motion.div>
      <h1 className="mx-auto text-2xl lg:text-3xl">{title}</h1>
      <div className=" w-full grid grid-cols-fluid gap-3">
        {inputFields.map((field) => (
          <InputField className="mx-auto" key={field.placeholder} {...field} />
        ))}
      </div>
      {children}
      <Button
        title="Weiter"
        bgColor="secondary"
        className="mt-16 px-20 mx-auto"
        handleBtnClick={handleSumbitForm}
      />
    </form>
  );
}
