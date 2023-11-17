import React from 'react';

const Hints = () => {
  return (
    <ul className="list-disc flex flex-col gap-2 text-sm font-medium">
      <li>
        Bitte bewahren Sie alle Medikamente in ihrer Originalverpackung auf..
      </li>
      <li>
        Überprüfen Sie, ob für Ihre Medikamente besondere Lagerungsbedingungen
        erforderlich sind, z.B. Kühlung{' '}
      </li>
      <li>
        Es wird empfohlen, eine Kopie Ihres Rezepts mitzuführen, um bei Bedarf
        Ihre Medikation nachweisen zu können.{' '}
      </li>
    </ul>
  );
};

export default Hints;
