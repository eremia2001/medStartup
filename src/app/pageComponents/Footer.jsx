import React from 'react';
import man from '../assets/man.png';
import logo from '../assets/logo.svg';
import linkedIn from '../assets/linkedIn.svg';
import instagram from '../assets/instagram.svg';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <div className="bg-[#2C3E50] flex flex-col gap-5  lg:flex-row  items-center  justify-evenly p-5  overflow-hidden text-white  ">
      <div className="flex flex-col items-center  lg:items-start mx-auto">
        <div className="w-48 translate-x-6">
          <Image
            src={logo}
            width={200}
            height={200}
            className="w-full"
            alt="Picture of the author"
          />
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold mt-5 lg:mt-10 ">
            Noch nicht überzeugt ?{' '}
          </h1>
          <button className="bg-primary rounded-md px-10 py-2 mt-2 ">
            Jetzt testen
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 mx-auto text-center">
        <h1 className="text-xl mt-6  font-semibold  ">Nützliche Links</h1>
        <ul className="flex flex-col gap-2">
          {['Vision', 'Service', 'FAQ', 'Kontakt'].map((item, index) => {
            return currentPath == '/' ? (
              <li key={index} className="cursor-pointer">
                <ScrollLink
                  to={item == 'Kontakt' ? 'contact' : item.toLowerCase()}
                  smooth={true}
                  duration={800}
                >
                  {item}
                </ScrollLink>
              </li>
            ) : (
              <li key={index} className="cursor-pointer">
                <Link
                  href={`/#${
                    item == 'Kontakt' ? 'contact' : item.toLowerCase()
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          <li className="cursor-pointer">
            <Link href="/Impressum">Impressum</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/Datenschutz">Datenschutzrichtlinie</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-row gap-10 mx-auto text-center mt-10">
        <Image
          src={man}
          width={200}
          height={200}
          alt="Picture of the author"
          className="lg:translate-y-10 hidden lg:block"
        />
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="font-semibold text-xl xl:text-2xl">
            Bleiben Sie in Verbindung
          </h1>
          <div className="flex flex-col h-full justify-evenly gap-5 ">
            <p className="font-semibold">
              Email : <span className="font-light">moouve@web.de</span>
            </p>
            <p className="font-semibold">
              Telefon : <span className="font-light">0176/2893 1829</span>
            </p>
            <div className="flex flex-row items-center gap-2 mx-auto">
              <Image
                src={linkedIn}
                width={50}
                height={50}
                alt="linkedin"
                className="w-10"
              />
              <p>Moouve</p>
            </div>
            <div className="flex flex-row items-center gap-2 mx-auto translate-x-2 ">
              <Image
                src={instagram}
                width={50}
                height={50}
                alt="instagram"
                className="w-10"
              />
              <p>@moouve</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={man}
        width={200}
        height={200}
        alt="Picture of the author"
        className="translate-y-10 lg:hidden mx-auto "
      />
    </div>
  );
};

export default Footer;
