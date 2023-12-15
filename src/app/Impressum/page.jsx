import React from 'react';

const Impressum = () => {
  return (
    <div className="p-4 w-full flex flex-col justify-center items-center">
      {/* Add converted text from Impressum PDF here, styled with Tailwind CSS */}
      <h1 className="text-xl font-bold">Impressum</h1>
      <h1>Angaben gemäß § 5 TMG</h1>

      <ul>
        <li>Noah Magdalinski</li>
        <li>Bruckdorfer Straße 5</li>
        <li>06112 Halle (Saale)</li>
      </ul>
      <h1>Kontakt</h1>

      <ul>
        <li>
          <span>Telefon : </span> +49 (0) 1744075088
        </li>
        <li>
          <span>Email : </span> moouv@web.de
        </li>
      </ul>
      <h1>redaktionell verantwortlich</h1>

      <ul>
        <li>Noah Magdalinski</li>
        <li>Bruckdorfer Straße 5</li>
        <li>06112 Halle (Saale)</li>
      </ul>
      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
      {/* Continue with the rest of the content */}
    </div>
  );
};

export default Impressum;
