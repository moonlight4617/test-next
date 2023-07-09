import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePortfolio } from "../features/hooks/usePortfolio";

type Props = {};

export const Works = (props: Props) => {
  const [portfolioArray, setPortfolioArray] = useState();
  const [portfolioFlag, setPortfolioFlag] = useState(false);
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
      console.log(
        `localhost:1337/${data[0].image.data.attributes.formats.small.url}`
      );
      const div = data.map((portfolio: any, index: number) => (
        <div
          className="flex mt-24 animate-fade-in-left text-gray-600"
          key={index}
        >
          <div className="w-1/2 overflow-hidden mr-4">
            {portfolio.image ? (
              <Image
                src={`http://localhost:1337${portfolio.image.data.attributes.formats.small.url}`}
                width="400"
                height="400"
                className="ml-auto flex-auto"
                alt={`portfoilo-image${index}`}
              />
            ) : (
              // <Image
              //   src="/images/photo12.jpg"
              //   width="400"
              //   height="400"
              //   className="ml-auto flex-auto"
              //   alt={`portfoilo-image${index}`}
              // />
              <p>テスト</p>
            )}

            {/* <Image
              src="/images/photo12.jpg"
              width="400"
              height="400"
              className="ml-auto flex-auto"
              alt="portfolio1"
            /> */}
          </div>
          <div className="flex-auto pl-1 w-1/2">
            <p className="font-medium title-font text-gray-900 text-3xl">
              {portfolio.name}
            </p>
            <br />
            <table>
              <tr>
                <td>概要:</td>
                <td>{portfolio.summary}</td>
              </tr>
              <tr className="mt-[10rem]">
                <td>詳細:</td>
                <td>{portfolio.description}</td>
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
                  <a href={portfolio.github}>{portfolio.github}</a>
                </td>
              </tr>
              <tr>
                <td className="w-20">使用言語:</td>
                <td></td>
              </tr>
            </table>
            {/* <p>概要: {portfolio.summary}</p>
            <p>詳細: {portfolio.description}</p>
            <p>
              URL: <a href={portfolio.url}>{portfolio.url}</a>
            </p>
            <p>
              github: <a href={portfolio.github}>{portfolio.github}</a>
            </p>
            <p>使用言語: </p> */}
          </div>
        </div>
      ));
      setPortfolioArray(div);
      setPortfolioFlag(true);
    });
  }, []);
  return (
    <>
      <div className="mt-64 mx-44" id="portfolio">
        <p className="text-center text-7xl">Portfolio</p>
        <p className="mt-8 text-center text-md">
          今まで作成してきたアプリなどの作品を紹介します。
        </p>
        {/* <Link href="/portfolio" className="group"> */}
        {portfolioArray}
        {/* <div className="flex mt-28 animate-fade-in-left text-gray-600">
          <div className="w-1/2 overflow-hidden" id="portfolio">
            <Image src="/images/photo12.jpg" width="400" height="400" className="ml-auto mr-4 flex-auto" alt="portfolio1" />
            <Image src="/images/photo12.jpg" width="400" height="400" className="flex-auto group-hover:scale-110 duration-300" alt="portfolio1" />
          </div>
          <div className="flex-auto pl-1 w-2/4">
            <p className="font-medium title-font text-gray-900 text-3xl">タイトル2</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-36 group-hover:opacity-100"></div>
            <br />
            <p>ポートフォリオの概要</p>
            <p>ポートフォリオの詳細説明</p>
            <p>ポートフォリオの詳細説明</p>
            <p>URL: </p>
            <p>github: </p>
            <p>使用言語: </p>
          </div>
        </div> */}
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
      {/* </Link> */}
    </>
  );
};
