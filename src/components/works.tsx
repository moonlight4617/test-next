import Image from "next/image";
import Link from "next/link";
import React from "react";
import getConfig from "next/config";

import { usePortfolio } from "../features/hooks/usePortfolio";
import { PortfolioGroup } from "./parts/portfolioGroup";

export const Works = () => {
  return (
    <div className="md:mt-64 md:mx-44 mt-24 animate-fade-in-left" id="portfolio">
      <p className="text-center md:text-7xl text-2xl">Portfolio</p>
      <p className="md:mt-8 text-center md:text-md mt-4">
        今まで作成してきたアプリなどの作品を紹介します。
      </p>
      <PortfolioGroup portNumLimit={1} />
    </div >
  );
};
