// KontaktForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formFields;
  const [submitStatus, setSubmitStatus] = useState(null);
  const serviceId = process.env.SERVICEID;
  const templateID = process.env.TEMPLATEID;
  const userID = process.env.USERID;

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    emailjs.send(serviceId, templateID, { name, email, message }, userID).then(
      (response) => {
        console.log('SUCCESS!', response);
        setSubmitStatus('success');
        setFormFields({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log('FAILED...', error);
        setSubmitStatus('error');
      }
    );
  };

  return (
    <div className="p-4 w-full h-full flex flex-col justify-center  max-w-[1080px]">
      <form onSubmit={handleSubmit} className="flex flex-col   gap-5 ">
        <div className="">
          <p className="font-light">Name</p>
          <input
            type="text"
            name="name"
            className="py-2 px-4 border border-gray-300 rounded-xl  w-full outline-none shadow-lg  duration-200"
            placeholder="Max Mustermann"
            value={formFields.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="">
          <p className="font-light">Email</p>
          <input
            type="email"
            name="email"
            className="py-2 px-4 border border-gray-300 rounded-xl w-full outline-none shadow-lg  duration-200 "
            placeholder="Ihre E-Mail"
            value={formFields.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="">
          <p className="font-light">Nachricht</p>

          <textarea
            className="py-2 px-4 border border-gray-300 rounded-xl  w-full outline-none shadow-lg duration-200"
            placeholder="Ihre Nachricht"
            rows="4"
            value={message}
            name="message"
            onChange={handleInputChange}
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
