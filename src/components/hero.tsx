import Image from "next/image";
import React from "react";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="mr-auto w-[88%] relative">
      <Image
        src="/images/bgSec04.jpg"
        width="2000"
        height="10"
        className="mx-auto mt-4 animate-fade-in-bottom"
        layout="responsive"
        alt="hero.jpg"
      />
      <div className="absolute top-[70%] w-[105%] left-[3rem]">
        <Image
          src="/images/hero-title.png"
          width="2000"
          height="800"
          className="animate-fade-in-right"
          layout="responsive"
          alt="hero-title.png"
        />
      </div>
    </div>
  );
};
