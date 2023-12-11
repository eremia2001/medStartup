import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plane from '../assets/airplane.jpg';

const StoryItem = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row sm:justify-between   gap-10 max-w-[1080px] shadow-lg p-10 border border-[#D9D9D9] rounded-3xl mt-10  ">
      <div className=" overflow-hidden mx-auto sm:mx-0  ">
        <Image
          src={plane}
          alt="earth"
          width={1000}
          height={1000}
          className="w-60 rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-4 items-center justify-between sm:items-center sm:justify-start sm:w-1/2 ">
        <h1 className="font-semibold text-2xl">Mission & Vison</h1>
        <p className="text-sm text-subline ">
          Wir träumen von einer Welt, in der Gesundheit kein Hindernis für
          Abenteuer ist, unterstützt durch unsere Werte Vertrauen, Genauigkeit
          und Benutzerfreundlichkeit.
        </p>
        <Link href="/Login">
          <button
            className={` bg-primary text-md text-white rounded-md px-3 py-2`}
          >
            Anmelden
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StoryItem;
