import React from "react";
import Link from "next/link";

import { PortfolioGroup } from "./parts/portfolioGroup";

export const Works = () => {
  return (
    <div className="md:mt-64 md:mx-44 mt-24 animate-fade-in-left" id="portfolio">
      <p className="text-center md:text-7xl text-2xl">Portfolio</p>
      <p className="md:mt-8 text-center md:text-md mt-4">
        今まで作成してきたアプリなどの作品を紹介します。
      </p>
      <Link href="/portfolio" className="group">
        <PortfolioGroup portNumLimit={1} isAbleLinks={false} />
        <div className="mt-12 group w-[9rem] ml-auto mr-8">
          <p className="group">ポートフォリオ一覧</p>
          <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
        </div>
      </Link>
    </div >
  );
};
