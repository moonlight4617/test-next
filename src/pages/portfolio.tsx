import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/parts/title";
import { usePortfolio } from "../features/hooks/usePortfolio";

export default function Portfolio() {
  const [portfolioArray, setPortfolioArray] = useState();
  useEffect(() => {
    usePortfolio().then((data) => {
      const div = data.map((portfolio: any, index: number) => (
        <div
          className="flex mt-28 animate-fade-in-left text-gray-600"
          key={index}
        >
          <div className="w-1/2 overflow-hidden mr-4">
            <Image
              src="/images/photo12.jpg"
              width="400"
              height="400"
              className="ml-auto flex-auto"
              alt="portfolio1"
            />
          </div>
          <div className="flex-auto pl-1 w-1/2">
            <p className="font-medium title-font text-gray-900 text-3xl">
              {portfolio.name}
            </p>
            <br />
            <p>概要: {portfolio.summary}</p>
            <p>詳細: {portfolio.description}</p>
            <p>
              URL: <a href={portfolio.url}>{portfolio.url}</a>
            </p>
            <p>
              github: <a href={portfolio.github}>{portfolio.github}</a>
            </p>
            <p>使用言語: </p>
          </div>
        </div>
      ));
      setPortfolioArray(div);
    });
  }, []);

  return (
    <div className="bg-[#f2f2e9] w-full pb-28">
      <div className="container w-4/5 mx-auto pt-8">
        <div className="w-36 ml-auto group">
          <Link href="/">
            <p>トップページへ戻る</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
        <Title />

        <div className="mx-16 mt-24">
          <div className="relative mb-28">
            <Image
              src="/images/photo01.jpg"
              width="500"
              height="10"
              alt=""
              className="flex"
            />
            <h1 className="absolute top-[50%] right-[40%] bg-white py-4 px-2">
              Portfolio
            </h1>
          </div>

          <div className="flex justify-center mb-28">
            <p className="vertical-rl text-2xl">作品のご紹介</p>
            <p className="vertical-rl ml-2 text-[#999999]">My works</p>
          </div>

          {portfolioArray}
        </div>
      </div>
    </div>
  );
}
