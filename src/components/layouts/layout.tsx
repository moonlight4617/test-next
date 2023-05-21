import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Header } from './header'
import { Hero } from '../hero'
import { Works } from '../works'
import { Profile } from '../profile'
import { Contact } from '../contact'
import { Blog } from '../blog'

type Props = {}

export const Layout = (props: Props) => {
  return (
    <div className="bg-[#f2f2e9]">
      <Header />
      <main>
        <Hero />
        <Works />
        <Profile />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}