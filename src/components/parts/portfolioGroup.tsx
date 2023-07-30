import React from 'react'
import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

import { usePortfolio } from "../../features/hooks/usePortfolio";

type PortfolioType = {
  attributes: {
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
  }
}

type ImageProps = {
  src?: string;
  width?: number;
  quality?: number;
}
type Props = {
  portNumLimit: number;
  isAbleLinks: boolean;
}

export const PortfolioGroup = ({ portNumLimit, isAbleLinks }: Props) => {
  const { publicRuntimeConfig } = getConfig();
  const myLoader = ({ src, width, quality }: ImageProps): string => {
    return `${publicRuntimeConfig.strapi}${src}?w=${width}&q=${quality || 75}`
  }
  const data = usePortfolio();

  return (
    <>
      {data.length < 1 ? (
        <div className="text-center mt-20">
          <h3 className="font-bold">
            現在表示できるポートフォリオはありません
          </h3>
        </div>
      ) : (
        <>
          {data.map((portfolio: PortfolioType, index: number) => (
            <div key={index}>
              {index < portNumLimit || portNumLimit === 0 ? (
                <div
                  className="md:flex md:mt-24 mt-8 text-gray-600"
                >
                  <div className="md:w-1/2 overflow-hidden md:mr-4 mx-8">
                    {portfolio.attributes.image && portfolio.attributes.image.data ? (
                      <div className='overflow-hidden'>
                        <Image
                          loader={myLoader}
                          src={portfolio.attributes.image.data.attributes.formats.small.url}
                          width="400"
                          height="400"
                          className="ml-auto flex-auto group-hover:scale-110 duration-300"
                          alt={`portfoilo-image${index}`}
                        />
                      </div>
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
                      {portfolio.attributes.name}
                    </p>
                    <p className="md:mt-4 mt-2">{portfolio.attributes.summary}</p>
                    <br />
                    <table>
                      <tbody className="align-top break-all">
                        <tr>
                          <td>詳細:</td>
                          <td className="">{portfolio.attributes.description}</td>
                        </tr>
                        {isAbleLinks ? (
                          <>
                            <tr>
                              <td>URL:</td>
                              <td>
                                <a href={portfolio.attributes.url}>{portfolio.attributes.url}</a>
                              </td>
                            </tr>
                            <tr>
                              <td>github:</td>
                              <td>
                                <a href={portfolio.attributes.github} target="_blank">{portfolio.attributes.github}</a>
                              </td>
                            </tr>
                          </>
                        ) : (<></>)}
                        <tr>
                          <td className="w-20">使用言語:</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (<></>)}
            </div>
          ))
          }
          {/* <div className="mt-12 group w-[9rem] ml-auto mr-8">
            <Link href="/portfolio">
              <p className="group">ポートフォリオ一覧</p>
              <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
            </Link>
          </div> */}
        </>
      )
      }
    </>
  )
}