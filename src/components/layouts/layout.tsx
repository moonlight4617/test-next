import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Header } from "./header";
import { Hero } from "../hero";
import { Works } from "../works";
import { Profile } from "../profile";
import { Contact } from "../contact";
import { Blog } from "../blog";

export const Layout = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenuOpen = (): void => {
    setOpenMenu(!openMenu);
  }

  const closeModal = (): void => {
    setOpenMenu(false)
  }

  return (
    <div className="bg-[#f2f2e9] overflow-x-hidden">
      <Header handleMenuOpen={handleMenuOpen} openMenu={openMenu} closeModal={closeModal} />
      <main onClick={closeModal}>
        <Hero />
        <Works />
        <Profile />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};
