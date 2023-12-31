import React from 'react';
import { Link } from 'react-scroll';
import { animate, motion } from 'framer-motion';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logoBlack.svg';

const NavBar = () => {
  const variants = {
    initial: { width: 0, x: '-50%', opacity: 0 },
    animate: { width: '100%', x: '-50%', opacity: 100 },
  };

  return (
    <header className="flex w-full h-max justify-between items-center py-2 px-4  bg-slate-100 shadow-lg ">
      <div>
        <Image
          src={logo}
          alt="moouv"
          width={200}
          height={200}
          className="w-40 sm:w-48"
        />
      </div>

      <ul className="hidden md:flex gap-5 font-medium translate-x-[-37px]">
        {['Service', 'Vision', 'FAQ', 'Kontakt'].map((item, index) => (
          <motion.li
            key={index}
            className="relative flex flex-col items-center"
            initial="inital"
            animate="initial"
            whileHover="animate"
            transition={{ duration: 0.3 }}
          >
            <Link
              to={item == 'Kontakt' ? 'contact' : item.toLowerCase()}
              className="cursor-pointer"
              smooth={true}
              duration={800}
            >
              {item}
            </Link>
            <motion.div
              className="absolute h-[1px] bottom-0 left-1/2 bg-gray-400"
              variants={variants}
            />
          </motion.li>
        ))}
      </ul>

      <button
        className={`hidden md:block bg-primary text-md text-white rounded-md px-3 py-2`}
      >
        Anmelden
      </button>
      <RxHamburgerMenu size={25} className="md:hidden cursor-pointer" />
    </header>
  );
};

export default NavBar;
