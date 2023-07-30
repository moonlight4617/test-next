import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="mr-auto w-[88%] relative md:pt-24">
      <Image
        src="/images/hero-bg.jpg"
        width="2000"
        height="10"
        className="mx-auto mt-4 animate-fade-in-bottom"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto"
        }}
        alt="hero.jpg"
        priority
      />
      <div className="absolute top-[80%] w-[105%] md:left-[3rem]">
        <Image
          src="/images/hero-title.png"
          width="1000"
          height="800"
          className="animate-fade-in-right"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }}
          alt="hero-title.png"
        />
      </div>
    </div>
  );
};
