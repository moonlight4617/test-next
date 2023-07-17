import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/parts/title";
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

export default function Portfolio() {
  const [portfolioArray, setPortfolioArray] = useState<any>();
  const myLoader = ({ src, width, quality }): string => {
    return `http://localhost:1337${src}?w=${width}&q=${quality || 75}`
  }

  useEffect(() => {
    usePortfolio().then((data) => {
      const div = data.map((portfolio: any, index: number) => (
        <div
          className="flex mt-24 text-gray-600  md:w-4/5 lg:w-3/5 mx-auto"
          key={index}
        >
          <div className="w-1/2 overflow-hidden mr-4">
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



          <div className="flex-auto pl-1 w-1/2">
            <p className="font-medium title-font text-gray-900 text-3xl">
              {portfolio.name}
            </p>
            <p className="mt-4">{portfolio.summary}</p>
            <br />
            <table>
              <tbody className="align-top break-all">
                <tr className="mt-[10rem]">
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
    });
  }, []);

  return (
    <div className="bg-[#f2f2e9] w-full pb-28">
      <div className="pt-8 pr-4">
        <div className="w-36 ml-auto group">
          <Link href="/">
            <p>トップページへ戻る</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
        <Title />

        <div className="mt-24">
          <div className="relative mb-48 animate-fade-in-bottom">
            <Image
              src="/images/portfolio-bg.JPG"
              width="1000"
              height="300"
              alt="portfolio-bg.JPG"
              sizes="100vw"
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
            <h1 className="absolute top-[45%] right-[20%] bg-[#f2f2e9] py-4 px-4">
              Portfolio
            </h1>
          </div>

          <div className="flex justify-center mb-24">
            <p className="vertical-rl text-2xl">作品のご紹介</p>
            <p className="vertical-rl ml-2 text-[#999999]">My works</p>
          </div>

          {portfolioArray}
        </div>
      </div>
    </div>
  );
}
