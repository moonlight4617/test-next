import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Profile = () => {
  return (
    <section className="md:mt-56 text-gray-600 relative md:pb-60 mt-32" id="profile">
      <div className="md:w-[70%] w-[88%] md:ml-0">
        <div className="relative ml-auto overflow-hidden">
          <Image
            src="/images/about-bg.jpg"
            alt="profile"
            width="800"
            height="200"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="duration-300"
            priority
          />
        </div>
        <div className="md:w-1/2 h-[26rem] bg-[#f2f2e9] md:absolute md:top-[30%] right-0 px-8 lg:px-24 md:pt-20 lg:top-[40%] pt-8 group">
          <Link href="/profile" className="group">
            <p className="md:text-center md:text-7xl text-2xl">About Me</p>
            <p className="md:mt-8 mt-2">飲食からエンジニアになった珍しいキャリアを歩んでいます。</p>
            <p>以前は個人の飲食店からスタートして、飲食業に従事してきました。<br />エンジニアとなった今では、以前に自分が勤めていたような個人経営の店舗などを支援できるようなサービスを開発・広めていくことが目標です。</p>
            <div className="mt-8 group w-[12rem] text-right ml-auto">
              <p className="text-lg">プロフィールページ</p>
              <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>

  )
}