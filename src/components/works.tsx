import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export const Works = (props: Props) => {
  return (
    <>
      <div className="mt-32 mx-auto mx-44">
        <p className="text-center text-7xl">Portfolio</p>
        <p className="mt-8 text-center text-md">今まで作成してきたアプリなどの作品を紹介します。</p>
        {/* <Link href="/portfolio" className="group"> */}
        <div className="flex mt-28 animate-fade-in-left text-gray-600">
          <div className="w-1/2 overflow-hidden" id="portfolio">
            <Image src="/images/photo12.jpg" width="400" height="400" className="flex-auto" alt="portfolio1" />
            {/* <Image src="/images/photo12.jpg" width="400" height="400" className="flex-auto group-hover:scale-110 duration-300" alt="portfolio1" /> */}
          </div>
          <div className="flex-auto pl-1 w-1/2">
            <p className="font-medium title-font text-gray-900 text-3xl">タイトル１</p>
            {/* <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-36 group-hover:opacity-100"></div> */}
            <br />
            <p>ポートフォリオの概要</p>
            <p>ポートフォリオの詳細説明</p>
            <p>ポートフォリオの詳細説明</p>
            <p>URL: </p>
            <p>github: </p>
            <p>使用言語: </p>
          </div>
        </div>
        <div className="flex mt-28 animate-fade-in-left text-gray-600">
          <div className="w-1/2 overflow-hidden" id="portfolio">
            <Image src="/images/photo12.jpg" width="400" height="400" className="flex-auto" alt="portfolio1" />
            {/* <Image src="/images/photo12.jpg" width="400" height="400" className="flex-auto group-hover:scale-110 duration-300" alt="portfolio1" /> */}
          </div>
          <div className="flex-auto pl-1 w-2/4">
            <p className="font-medium title-font text-gray-900 text-3xl">タイトル2</p>
            {/* <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-36 group-hover:opacity-100"></div> */}
            <br />
            <p>ポートフォリオの概要</p>
            <p>ポートフォリオの詳細説明</p>
            <p>ポートフォリオの詳細説明</p>
            <p>URL: </p>
            <p>github: </p>
            <p>使用言語: </p>
          </div>
        </div>
        <div className="mt-12 group w-[9rem] ml-auto mr-8">
          <Link href="/portfolio">
            <p className="">ポートフォリオ一覧</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}