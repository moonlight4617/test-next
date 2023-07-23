import Image from "next/image";
import { useState } from "react";

import { Title } from '../parts/title'

type Props = {}

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuOpen = (): void => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="relative md:pb-24">
      <button onClick={handleMenuOpen} className="w-full text-right pr-12 mt-4 z-10">
        {openMenu ?
          <span className="material-symbols-outlined z-20 fixed ease-linear duration-1000">close</span>
          : <span className="material-symbols-outlined z-20 fixed ease-linear duration-1000">menu</span>
        }
      </button>
      {/* <div className="mx-32">
        <Image src="/images/bgSec04.jpg" width="2000" height="10" className="mx-auto mt-4 animate-fade-in-bottom" alt="" />
      </div>
      <p className="absolute top-28 right-16 text-7xl font-sans animate-fade-in-right">My <br />Works</p> */}
      <nav
        className={
          openMenu
            ? 'text-left fixed bg-slate-50 opacity-90 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300 z-10'
            : 'fixed right-[-100%] ease-linear duration-300'
        }
      >
        <ul className="mt-6">
          <li className="border-b"><a href="#portfolio" className="hover:bg-gray-300 block px-2 py-2 rounded">Portfolio</a></li>
          <li className="border-b"><a href="#profile" className="hover:bg-gray-300 block px-2 py-2 rounded">About Me</a></li>
          <li className="border-b"><a href="#contact" className="hover:bg-gray-300 block px-2 py-2 rounded">Contact Me</a></li>
        </ul>
      </nav>
      <Title />
    </div>

  )
}
