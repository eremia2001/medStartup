'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import { Link } from 'react-scroll';
import Footer from './pageComponents/Footer';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        {pathname !== '/Login' && (
          <header className="flex w-full h-max justify-between items-center p-2  bg-slate-100 shadow-lg ">
            <div>
              <h2 className="font-bold text-2xl">moouv.</h2>
            </div>

            <ul className="hidden md:flex gap-5 font-medium">
              <li>
                <Link
                  to="service"
                  className="cursor-pointer"
                  smooth={true}
                  duration={800}
                >
                  Service
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="vision" smooth={true} duration={800}>
                  Vision
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  to="faq"
                  className="cursor-pointer"
                  smooth={true}
                  duration={800}
                >
                  FAQ
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  to="contact"
                  className="cursor-pointer"
                  smooth={true}
                  duration={800}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            <button
              className={`hidden md:block bg-primary text-md text-white rounded-md px-3 py-2`}
            >
              Anmelden
            </button>
            <RxHamburgerMenu size={25} className="md:hidden cursor-pointer" />
          </header>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
