import Image from 'next/image'
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="mx-16">
      <p className="text-7xl font-sans mt-10">Portfolio</p>
      <div className="w-36 ml-auto group">
        <Link href="/">
          <p>トップページへ戻る</p>
          <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100">
          </div>
        </Link>
      </div>
      <div className="flex mt-12">
        <Image src="/images/photo01.jpg" width="500" height="10" alt="" className="flex" />
        <div className="ml-12">
          <p className="text-3xl">タイトル</p>
          <p>本文</p>
          <p>使用技術：</p>
          <p>URL：</p>
          <p>github：</p>
        </div>
      </div>
      <div className="flex mt-24">
        <div className="ml-12">
          <p className="text-3xl">タイトル</p>
          <p>本文</p>
          <p>使用技術：</p>
          <p>URL：</p>
          <p>github：</p>
        </div>
        <Image src="/images/photo02.jpg" width="500" height="10" alt="" className="flex ml-auto" />
      </div>
    </div>
  );
}