import Image from 'next/image'
import React from 'react'

type Props = {}

export const Hero = (props: Props) => {
  return (
    <div className="mr-auto w-[88%]">
      <Image src="/images/bgSec04.jpg" width="2000" height="10" className="mx-auto mt-4 animate-fade-in-bottom" alt="hero.jpg" />
      <p className="mt-[-2.6rem] text-white text-8xl font-sans animate-fade-in-right">Ryoji's Works</p>
    </div>

  )
}