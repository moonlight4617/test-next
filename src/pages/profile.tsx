import Image from 'next/image'
import Link from 'next/link'

export default function profile() {
  return (
    <div className="container w-4/5 mx-auto mt-8">
      <div className="w-36 ml-auto group">
        <Link href="/">
          <p>トップページへ戻る</p>
          <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100">
          </div>
        </Link>
      </div>
      <div className="flex mt-4">
        <div className="mr-12 ml-12">
          <p className="text-3xl font-sans mb-2">経歴</p>
          <p>神奈川県厚木市出身。<br />個人経営イナズマカフェで勤務後、「俺の株式会社」フレンチ、ベーカリー部門で勤務。<br />
            プログラミングを勉強した後、未経験エンジニアとして転職し「株式会社SALTO」で勤務中。
          </p>
          <p className="text-3xl font-sans mt-20 mb-2">趣味</p>
          <li>野球鑑賞（横浜DeNAベイスターズ）</li>
          <li>映画鑑賞・読書</li>
          <li>ひとり旅</li>
          <p className="text-3xl font-sans mt-20 mb-2">ブログ</p>
          <a href="https://fluid-27.hatenablog.com/">https://fluid-27.hatenablog.com/</a>
        </div>
        <Image src="/images/photo01.jpg" width="500" height="10" alt="" />
      </div>
    </div>
  )
}