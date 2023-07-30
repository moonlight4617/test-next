import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components/parts/title";
import { PortfolioGroup } from "../components/parts/portfolioGroup"

export default function Portfolio() {
  return (
    <div className="bg-[#f2f2e9] w-full pb-28">
      <div className="pt-8 pr-4">
        <div className="w-36 ml-auto group">
          <Link href="/">
            <p>トップページへ戻る</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </Link>
        </div>
        <Title />
        <div className="mt-24">
          <div className="relative mb-48 animate-fade-in-bottom">
            <Image
              src="/images/portfolio-bg.jpg"
              width="1000"
              height="300"
              alt="portfolio-bg.JPG"
              sizes="100vw"
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
            <h1 className="absolute top-[45%] right-[20%] bg-[#f2f2e9] py-4 px-4">
              Portfolio
            </h1>
          </div>
          <div className="flex justify-center mb-24">
            <p className="vertical-rl text-2xl">作品のご紹介</p>
            <p className="vertical-rl ml-2 text-[#999999]">My works</p>
          </div>
          <PortfolioGroup portNumLimit={0} />
        </div>
      </div>
    </div>
  );
}
