import React from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className="flex w-full h-max justify-between items-center p-2  bg-slate-100 shadow-lg ">
      <div>
        <h2 className="font-bold text-2xl">MEDICARRY.</h2>
      </div>

      <ul className="hidden md:flex gap-5 font-medium">
        <li>
          <Link href="/">Funktionen</Link>
        </li>
        <li>
          <Link href="/">Preise</Link>
        </li>
        <li>
          <Link href="/">Über uns</Link>
        </li>
      </ul>

      <Link href="/Login">
        <button
          className={`hidden md:block bg-primary text-md text-white rounded-md px-3 py-2`}
        >
          Anmelden
        </button>
      </Link>
      <RxHamburgerMenu size={25} className="md:hidden cursor-pointer" />
    </div>
  );
};

export default Navbar;
