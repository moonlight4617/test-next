import React from 'react'

type Props = {}

export const Blog = (props: Props) => {
  return (
    <section className="mt-36">
      <div className="w-[80%] h-[32rem] bg-white ml-auto relative">
        <p className="text-7xl mt-[-2.5rem] ml-16 absolute">Blog</p>
        <div className="flex pt-36 ml-[-4rem]">
          <div className="w-60 h-60 bg-teal-600 mr-20 rounded-2xl"></div>
          <div className="w-60 h-60 bg-teal-600 mr-20 rounded-2xl"></div>
          <div className="w-60 h-60 bg-teal-600 mr-20 rounded-2xl"></div>
        </div>
        <div className="mt-16 text-right mr-8">
          <a href="#">ブログサイト(外部)へ</a>
        </div>
      </div>
    </section>
  )
}