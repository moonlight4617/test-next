import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePortfolio } from "../features/hooks/usePortfolio";

type PortfolioType = {
  url: string;
  image: {
    data: {
      attributes: {
        formats: {
          small: {
            url: string;
          }
        }
      }
    }
  };
  name: string;
  summary: string;
  description: string;
  github: string;
};

type ImageProps = {
  src?: string;
  width?: number;
  quality?: number;
}

export const Works = () => {
  const [portfolioArray, setPortfolioArray] = useState<any>();
  const [portfolioFlag, setPortfolioFlag] = useState<boolean>(false);
  useEffect(() => {
    usePortfolio().then((data) => {
      if (!data) {
        const noPortfolio = (
          <div className="text-center mt-20">
            <h3 className="font-bold">
              現在表示できるポートフォリオはありません
            </h3>
          </div>
        );
        setPortfolioArray(noPortfolio);
        return;
      }
      const myLoader = ({ src, width, quality }: ImageProps): string => {
        return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`
      }
      const div = data.map((portfolio: PortfolioType, index: number) => (
        <div
          className="md:flex md:mt-24 mt-8 text-gray-600"
          key={index}
        >
          <div className="md:w-1/2 overflow-hidden md:mr-4 mx-8">
            {portfolio.image && portfolio.image.data ? (
              <Image
                loader={myLoader}
                src={portfolio.image.data.attributes.formats.small.url}
                width="400"
                height="400"
                className="ml-auto flex-auto"
                alt={`portfoilo-image${index}`}
              />
            ) : (
              <Image
                src="/images/noimage.png"
                width="400"
                height="400"
                className="ml-auto flex-auto"
                alt="no-image"
              />
            )}
          </div>
          <div className="flex-auto md:pl-1 md:w-1/2 px-8">
            <p className="font-medium title-font text-gray-900 md:text-3xl text-xl mt-4">
              {portfolio.name}
            </p>
            <p className="md:mt-4 mt-2">{portfolio.summary}</p>
            <br />
            <table>
              <tbody className="align-top break-all">
                <tr>
                  <td>詳細:</td>
                  <td className="">{portfolio.description}</td>
                </tr>
                <tr>
                  <td>URL:</td>
                  <td>
                    <a href={portfolio.url}>{portfolio.url}</a>
                  </td>
                </tr>
                <tr>
                  <td>github:</td>
                  <td>
                    <a href={portfolio.github} target="_blank">{portfolio.github}</a>
                  </td>
                </tr>
                <tr>
                  <td className="w-20">使用言語:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ));
      setPortfolioArray(div);
      setPortfolioFlag(true);
    });
  }, []);
  return (
    <div className="md:mt-64 md:mx-44 mt-24 animate-fade-in-left" id="portfolio">
      <p className="text-center md:text-7xl text-2xl">Portfolio</p>
      <p className="md:mt-8 text-center md:text-md mt-4">
        今まで作成してきたアプリなどの作品を紹介します。
      </p>
      {portfolioArray}
      {portfolioFlag ? (
        <div className="mt-12 group w-[9rem] ml-auto mr-8">
          <Link href="/portfolio">
            <p className="">ポートフォリオ一覧</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
