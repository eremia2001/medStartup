import React from 'react';

const Hints = () => {
  return (
    <ul className="list-disc flex flex-col gap-2 text-sm font-medium">
      <li>
        Bitte bewahren Sie alle Medikamente in ihrer{' '}
        <span className="font-bold">Originalverpackung</span> auf..
      </li>
      <li>
        Überprüfen Sie, ob für Ihre Medikamente besondere{' '}
        <span className="font-bold">Lagerbedingungen </span>
        erforderlich sind, z.B. Kühlung{' '}
      </li>
      <li>
        Es wird empfohlen, eine Kopie Ihres{' '}
        <span className="font-bold">Rezepts</span> mitzuführen, um bei Bedarf
        Ihre Medikation nachweisen zu können.{' '}
      </li>
    </ul>
  );
};

export default Hints;
