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
                ? 'text-left fixed bg-slate-50 opacity-90 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                : 'fixed right-[-100%] ease-linear duration-300'
            }
          >
            <ul className="mt-6">
              <li className="border-b"><a href="#portfolio" className="hover:bg-gray-300 block px-2 py-2 rounded">Portfolio</a></li>
              <li className="border-b"><a href="#profile" className="hover:bg-gray-300 block px-2 py-2 rounded">About Me</a></li>
              <li className="border-b"><a href="#contact" className="hover:bg-gray-300 block px-2 py-2 rounded">Contact Me</a></li>
            </ul>
          </nav>
        </div>
        <Link href="/portfolio" className="group">
          <div className="flex mt-36 animate-fade-in-left text-gray-600 ">
            <div className="w-2/4 overflow-hidden" id="portfolio">
              <Image src="/images/imgProject.jpg" width="1000" height="10" className="flex-auto group-hover:scale-110 duration-300" alt="" />
            </div>
            <div className="flex-auto pl-4 w-2/4">
              <p className="font-medium title-font text-gray-900 sm:text-3xl text-4xl">Portfolio</p>
              <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-36 group-hover:opacity-100"></div>
              <br />
              <p>ポートフォリオ集。<br />今までに作成したアプリやwebページなどを閲覧できます。</p>
            </div>
          </div>
        </Link>
        <section className="mt-16 flex text-gray-600">
          <div className="w-6/12">
            <Link href="/profile" className="mt-48 flex flex-auto group">
              <div className="overflow-hidden">
                <Image src="/images/photo04.jpg" alt="" width="350" height="10" className="flex-initial group-hover:scale-110 duration-300" />
              </div>
              <div className="ml-2" id="profile">
                <p className="flex-none font-medium title-font text-gray-900 sm:text-3xl text-4xl">About Me</p>
                <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
                <br />
                <p className="">経歴や趣味</p>
              </div>
            </Link>
          </div>
          <div className="ml-auto">
            <Image src="/images/photo03.jpg" alt="" width="250" height="10" className="mt-12" />
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-28 mx-auto">
            <div className="flex flex-col text-center w-full mb-12" id="contact">
              <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">お問合せに関してはこちらからお願いします。</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">名前</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Eメール</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">本文</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">送信</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
