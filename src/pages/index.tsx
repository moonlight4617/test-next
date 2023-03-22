import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      <Head>
        <title>Test Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main>
        <div className="relative">
          <button onClick={handleMenuOpen} className="w-full text-right pr-12 mt-4 z-10">
            {openMenu ? <span className="material-symbols-outlined z-10 fixed ease-linear duration-1000">close</span> : <span className="material-symbols-outlined z-10 fixed ease-linear duration-1000">menu</span>
            }
          </button>
          <div className="mx-32">
            <Image src="/images/bgSec04.jpg" width="2000" height="10" className="mx-auto mt-4 animate-fade-in-bottom" alt="" />
          </div>
          <p className="absolute top-28 right-16 text-7xl font-sans animate-fade-in-right">My <br />Works</p>

          <nav
            className={
              openMenu
                ? 'text-left fixed bg-slate-50 opacity-90 right-0 top-0 w-4/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                : 'fixed right-[-100%] ease-linear duration-300'
            }
          >
            <ul className="mt-6">
              <li><a href="#portfolio">リスト</a></li>
            </ul>
          </nav>

        </div>
        <Link href="/portfolio" className="group">
          <div className="flex mt-36 animate-fade-in-left">
            <div className="w-2/4 overflow-hidden" id="portfolio">
              <Image src="/images/imgProject.jpg" width="1000" height="10" className="flex-auto group-hover:scale-110 duration-300" alt="" />
            </div>
            <div className="flex-auto pl-4 w-2/4">
              <p className="text-4xl font-sans">Portfolio</p>
              <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-36 group-hover:opacity-100"></div>
              <br />
              <p>ポートフォリオ集。<br />今までに作成したアプリやwebページなどを閲覧できます。</p>
            </div>
          </div>
        </Link>
        <div className="mt-16 flex ">
          <div className="w-6/12">
            <Link href="/profile" className="mt-48 flex flex-auto group">
              <div className="overflow-hidden">
                <Image src="/images/photo04.jpg" alt="" width="350" height="10" className="flex-initial group-hover:scale-110 duration-300" />
              </div>
              <div className="ml-2">
                <p className="text-4xl font-sans flex-none">About Me</p>
                <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
                <br />
                <p className="">経歴や趣味</p>
              </div>
            </Link>
          </div>
          <div className="ml-auto">
            <Image src="/images/photo03.jpg" alt="" width="250" height="10" className="mt-12" />
          </div>
        </div>
      </main>
    </>
  )
}
