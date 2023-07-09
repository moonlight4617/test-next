import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Profile = () => {
  return (
    <section className="mt-56 text-gray-600 relative pb-60" id="profile">
      <div className="overflow-hidden">
        <Image
          src="/images/photo14.jpg"
          alt="profile"
          width="800"
          height="200"
          style={{
            width: '70vw',
            height: 'auto',
          }}
          className="group-hover:scale-110 duration-300"
        />
      </div>
      <div className="w-[40rem] h-[26rem] bg-[#f2f2e9] absolute top-[16rem] right-0 px-24 pt-20">
        {/* <div className="w-[36rem] h-[26rem] bg-[#f2f2e9] absolute top-[16rem] left-[40rem] px-24 pt-20"> */}
        <p className="text-center text-7xl">About Me</p>
        <p className="mt-8">飲食からエンジニアになった珍しいキャリアを歩んでいます。</p>
        <p>以前は個人の飲食店からスタートして、飲食業に従事してきました。<br />エンジニアとなった今では、以前に自分が勤めていたような個人経営の店舗などを支援できるようなサービスを開発・広めていくことが目標です。</p>
        <div className="mt-8 group w-[9rem] ml-auto">
          <Link href="/profile" className="">
            <p className="">プロフィールページ</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
      </div>
      {/* <div className="ml-2" id="profile">
          <p className="flex-none font-medium title-font text-gray-900 sm:text-3xl text-4xl">About Me</p>
          <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
          <br />
          <p className="">経歴や趣味</p>
        </div> */}
    </section>

  )
}