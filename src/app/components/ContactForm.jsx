// KontaktForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = 'Name ist erforderlich.';
    if (!email) tempErrors.email = 'E-Mail ist erforderlich.';
    else if (!/\S+@\S+\.\S+/.test(email))
      tempErrors.email = 'Ungültige E-Mail-Adresse.';
    if (!message) tempErrors.message = 'Nachricht ist erforderlich.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Hier Logik zum Senden der Formulardaten einfügen
      console.log({ name, email, message });
    }
  };

  return (
    <div className="p-4 w-full h-full flex flex-col justify-center  max-w-[1080px]">
      <form onSubmit={handleSubmit} className="flex flex-col   gap-5 ">
        <div className="">
          <p className="font-light">Name</p>
          <input
            type="text"
            className="py-2 px-4 border border-gray-300 rounded-xl  w-full outline-none shadow-lg hover:scale-105 duration-200"
            placeholder="Max Mustermann"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="">
          <p className="font-light">Email</p>
          <input
            type="email"
            className="py-2 px-4 border border-gray-300 rounded-xl w-full outline-none shadow-lg hover:scale-105 duration-200 "
            placeholder="Ihre E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="">
          <p className="font-light">Nachricht</p>

          <textarea
            className="py-2 px-4 border border-gray-300 rounded-xl  w-full outline-none shadow-lg hover:scale-105 duration-200"
            placeholder="Ihre Nachricht"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-secondary hover:scale-105  duration-200 text-white font-bold py-2 px-4 rounded-2xl shadow-lg"
        >
          Senden
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
