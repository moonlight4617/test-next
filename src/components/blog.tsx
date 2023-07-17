import React from "react";
import { useBlogs } from "../features/hooks/useBlogs";
import getConfig from "next/config";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Next.jsの設定を取得
const { publicRuntimeConfig } = getConfig();

type BlogDatas = {
  title: string;
  published: string;
};

export const Blog = () => {
  const blogData = useBlogs();
  const formDate = (date: string): string => {
    const newDate = new Date(date);
    const formedDate: string =
      newDate.getFullYear() +
      "/" +
      ((newDate.getMonth() % 12) + 1) +
      "/" +
      newDate.getDate();
    return formedDate;
  };
  // console.log(blogData);

  const BlogDataSwiper = () => {
    return (
      <>
        <Swiper
          breakpoints={{
            580: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            790: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '#pagination',
          }}
          navigation={{
            prevEl: "#button_prev",
            nextEl: "#button_next"
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="w-[110%] !ml-[-10%]"
        >
          {blogData.map((data: Array<BlogDatas>, index: number) => (
            <SwiperSlide
              className="flex"
              key={index}
            >
              <div className="w-56 h-56 bg-[#e6e6cf] mr-20 rounded-2xl p-8 flex flex-col shadow-gray-400 shadow-md mb-2"
              >
                <h2 className="text-[1.3rem] flex-1 text-ellipsis overflow-hidden">{data[1].title || "No Title"}</h2>
                {/* <p className="">{data[1].summary}</p> */}
                <p className="mt-4 ml-auto">{formDate(data[1].published) || "No Date"}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div id="button_prev" className="rounded-full border border-black absolute top-10 right-60 h-10 w-10 cursor-pointer"><div className="ml-[.85rem] mt-[.65rem] h-4 w-4 rotate-[225deg] border-r-[2px] border-t-[2px] border-solid border-x-transparent border-t-[#373737] border-r-[#373737]"></div></div>
        <div id="button_next" className="absolute top-10 right-40 h-10 w-10 cursor-pointer rounded-full border border-black"><div className="ml-[.5rem] mt-[.65rem] h-4 w-4 rotate-45 border-r-[2px] border-t-[2px] border-solid border-x-transparent border-t-[#373737] border-r-[#373737]"></div></div>
        {/* <div className="swiper-pagination !relative !mt-10" id="pagination" /> */}
      </>
    )
  }

  return (
    <section className="mt-36">
      <div className="w-[80%] h-[32rem] bg-white ml-auto relative">
        <p className="text-7xl mt-[-2.5rem] ml-16 absolute">Blog</p>
        <div className="pt-36 p-4">
          {!blogData || blogData.length < 1 ? (
            <p className="mx-auto mt-20">
              現在表示できるブログ記事はありません
            </p>
          ) : (
            <BlogDataSwiper />
          )}
        </div>
        {blogData ? (
          <div className="w-[10rem] mt-16 ml-auto mr-8 group">
            <a href={publicRuntimeConfig.blogUrl} target="_blank">ブログサイト(外部)へ</a>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-200 ease-in group-hover:w-full group-hover:opacity-100"></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section >
  );
};
