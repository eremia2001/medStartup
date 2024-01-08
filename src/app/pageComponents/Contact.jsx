import React from 'react';
import ContactForm from '../components/ContactForm';
import cross from '../assets/kreuze.png';
import cross2 from '../assets/kreuze2.svg';
import hand from '../assets/Hand.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center relative " id="contact">
      <div className="mx-auto text-center mt-20">
        <h1 className=" font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
          <span className="text-primary">Kontaktieren </span> Sie uns
        </h1>
        <h2 className="text-2xl  md:text-3xl lg:text-4xl font-bold">
          Wir sind hier, um zu helfen
        </h2>
        <p className="text-subline  lg:text-lg ">
          Fragen, Feedback oder individuelle Anfragen? Lassen Sie es uns wissen!
        </p>
      </div>
      <Image
        src={cross2}
        width={800}
        height={800}
        alt="Picture of the author"
        className="absolute w-[300px] hidden xl:block left-0 top-20 "
      />
      <Image
        src={cross2}
        width={800}
        height={800}
        alt="Picture of the author"
        className="absolute w-[300px] hidden xl:block right-0 top-20 "
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
