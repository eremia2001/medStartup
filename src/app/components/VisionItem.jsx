import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import plane from '../assets/airplane.jpg';
import { IoMdRocket } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const VisionItem = ({ imageFirst, title, desc, icon: Icon }) => {
  const imageSection = (
    <div className=" overflow-hidden mx-auto sm:mx-0  ">
      <Image
        src={plane}
        alt="earth"
        width={1000}
        height={1000}
        className="w-60 rounded-3xl"
      />
    </div>
  );

  const textSection = (
    <motion.div className="flex flex-col gap-4 items-center justify-between sm:items-start sm:justify-start sm:w-1/2 ">
      <div className="flex flex-row gap-2">
        <Icon size={30} className="text-secondary" />
        <h1 className="font-semibold text-2xl">{title}</h1>
      </div>

      <p className="text-sm text-subline ">{desc}</p>
      <Link href="/Login">
        <button
          className={`bg-primary text-md text-white rounded-md px-3 py-2`}
        >
          Anmelden
        </button>
      </Link>
    </motion.div>
  );

  return (
    <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-10 max-w-[1080px] shadow-lg p-10 border border-[#D9D9D9] rounded-3xl mt-10">
      {imageFirst ? imageSection : textSection}
      {imageFirst ? textSection : imageSection}
    </div>
  );
};

export default VisionItem;
