import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
      </Head>
      <main>
        <div className="relative">
          <div className="mx-32">
            <Image src="/images/bgSec04.jpg" width="2000" height="10" className="mx-auto mt-20 animate-fade-in-bottom" alt="" />
          </div>
          <p className="absolute top-28 right-16 text-7xl font-sans animate-fade-in-right">My <br />Works</p>
        </div>
        <Link href="/portfolio" className="group">
          <div className="flex mt-36 animate-fade-in-left">
            <div className="w-2/4 overflow-hidden">
              <Image src="/images/imgProject.jpg" width="1000" height="10" className="flex-auto group-hover:scale-110 duration-300" alt="" />
            </div>
            <div className="flex-auto pl-4 w-2/4">
              <p className="text-4xl font-sans">Portfolio</p>
              <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
              <br />
              <p>ポートフォリオ集。<br />今までに作成したアプリやwebページなどを閲覧できます。</p>
            </div>
          </div>
        </Link>
      </main>
    </>
  )
}
