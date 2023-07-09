import React from "react";
import { useBlogs } from "../features/hooks/useBlogs";
import getConfig from "next/config";
// Next.jsの設定を取得
const { publicRuntimeConfig } = getConfig();

type Props = {};

export const Blog = (props: Props) => {
  const blogData = useBlogs();
  const formDate = (date: any) => {
    const newDate = new Date(date);
    const formedDate =
      newDate.getFullYear() +
      "/" +
      ((newDate.getMonth() % 12) + 1) +
      "/" +
      newDate.getDate();
    return formedDate;
  };
  // console.log(blogData);

  return (
    <section className="mt-36">
      <div className="w-[80%] h-[32rem] bg-white ml-auto relative">
        <p className="text-7xl mt-[-2.5rem] ml-16 absolute">Blog</p>
        <div className="flex pt-36 ml-[-4rem]">
          {blogData ? (
            blogData.map((data) => (
              <div
                className="w-60 h-60 bg-[#e6e6cf] mr-20 rounded-2xl p-8"
                key={data[1].title}
              >
                <h2 className="text-2xl">{data[1].title}</h2>
                {/* <p className="">{data[1].summary}</p> */}
                <p className="mt-4">{formDate(data[1].published)}</p>
              </div>
            ))
          ) : (
            <p className="mx-auto mt-20">
              現在表示できるブログ記事はありません
            </p>
          )}
        </div>
        {blogData ? (
          <div className="w-[8rem] mt-16 ml-auto mr-8 group">
            <a href={publicRuntimeConfig.blogUrl}>ブログサイト(外部)へ</a>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
