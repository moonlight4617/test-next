import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function thanks() {
  return (
    <div className="bg-[#f2f2e9] w-full h-screen">
      <div className="container w-2/3 mx-auto pt-8">
        <div className="w-36 ml-auto group">
          <Link href="/">
            <p>トップページへ戻る</p>
            <div className="border-b border-black w-0 opacity-0 transition-all origin-left duration-300 ease-in group-hover:w-full group-hover:opacity-100">
            </div>
          </Link>
        </div>

        <h2 className='text-3xl font-sans mb-2 text-center mt-16'>Thanks!</h2>
        <p className="mt-8 mx-8">ご連絡ありがとうございます。<br />サイト運営者からご連絡差し上げますので、返信まで少々お待ちください。</p>
      </div>
    </div>
  )
}

export default thanks