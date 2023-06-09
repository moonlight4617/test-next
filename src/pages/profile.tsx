import Image from 'next/image'
import Link from 'next/link'

import { Title } from '../components/parts/title'

export default function profile() {
  return (
    <div className="bg-[#f2f2e9] w-full h-full">
        <div className="w-36 ml-auto group mr-8 pt-4">
          <Link href="/">
            <p>トップページへ戻る</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100">
            </div>
          </Link>
        </div>
        <Title />
      <div className="container w-2/3 mx-auto pt-8">
        <div className="flex justify-center absolute left-[50%]">
          <p className="vertical-rl text-2xl">田邊涼二</p>
          <p className="vertical-rl ml-2 text-[#999999]">ryoji tanabe</p>
        </div>
        <Image src="/images/photo01.jpg" width="500" height="10" alt="" className="mx-auto mt-20" />
        <div className="flex mt-20">
          <p className="vertical-rl text-2xl">自己紹介</p>
          <p className="vertical-rl ml-2 text-[#999999]">self-introduction</p>
          <div className="ml-28">
            <span className="text-2xl font-sans mb-2 border border-black bg-white py-2 px-12">経歴</span>
            <p className="p-12 text-sm">
              神奈川県厚木市出身。<br />個人経営イナズマカフェで勤務後、「俺の株式会社」フレンチ、ベーカリー部門で勤務。<br />
              プログラミングを勉強した後、未経験エンジニアとして転職し「株式会社SALTO」で勤務中。
            </p>
            <span className="text-2xl font-sans mb-2 border border-black bg-white py-2 px-12">趣味</span>
            <div className="p-12 text-sm">
              <li>野球鑑賞（横浜DeNAベイスターズ）</li>
              <li>映画鑑賞・読書</li>
              <li>ひとり旅</li>
            </div>
            <span className="text-2xl font-sans mb-2 border border-black bg-white py-2 px-12">ブログ</span>
            <div className="p-12 text-sm">
              <a href="https://fluid-27.hatenablog.com/">https://fluid-27.hatenablog.com/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}