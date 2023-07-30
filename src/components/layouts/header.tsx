import { useState } from "react";
import { Link as Scroll } from 'react-scroll';

import { Title } from '../parts/title'

type Props = {
  handleMenuOpen: () => void;
  openMenu: boolean;
  closeModal: () => void;
}

export const Header = ({ handleMenuOpen, openMenu, closeModal }: Props) => {

  return (
    <div className="relative">
      <button onClick={handleMenuOpen} className="w-full text-right pr-12 mt-4 z-10">
        {openMenu ?
          <span className="material-symbols-outlined z-20 fixed ease-linear duration-2000">close</span>
          : <span className="material-symbols-outlined z-20 fixed ease-linear duration-1000">menu</span>
        }
      </button>
      <nav
        className={
          openMenu
            ? 'text-left fixed bg-slate-50 opacity-90 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300 z-10'
            : 'fixed right-[-100%] ease-linear duration-300'
        }
      >
        <ul className="mt-6">
          <Scroll
            to="portfolio"
            smooth={true}
            duration={600}
            className="hover:bg-gray-300 block px-2 py-2 rounded"
            onClick={handleMenuOpen}
          >
            Portfolio
          </Scroll>
          <Scroll
            to="profile"
            smooth={true}
            duration={600}
            className="hover:bg-gray-300 block px-2 py-2 rounded"
            onClick={handleMenuOpen}
          >
            About Me
          </Scroll>
          <Scroll
            to="blog"
            smooth={true}
            duration={600}
            className="hover:bg-gray-300 block px-2 py-2 rounded"
            offset={-150}
            onClick={handleMenuOpen}
          >
            Blog
          </Scroll>
          <Scroll
            to="contact"
            smooth={true}
            duration={600}
            className="hover:bg-gray-300 block px-2 py-2 rounded"
            onClick={handleMenuOpen}
          >
            Contact Me
          </Scroll>
        </ul>
      </nav>
      <Title closeModal={closeModal} />
    </div>

  )
}
