import Image from 'next/image'
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="mx-16">
      <p className="text-7xl font-sans ml-10 mt-10">Portfolio</p>
      <Link href="/">トップページへ戻る</Link>
      <div className="flex mt-8">
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