import React from "react";
import { useRouter } from "next/router";

export const Contact = () => {
  const router = useRouter();
  const registerUser = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // console.log(res)
    if (res.ok !== true) router.replace("/error");

    router.replace("/thanks");
  };

  return (
    <section className="text-gray-600 body-font relative mt-16" id="contact">
      <form className="container px-5 py-28 mx-auto" onSubmit={registerUser}>
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl md:text-7xl font-medium mb-4 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            お問合せに関してはこちらからお願いします。
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="relative p-2 w-full">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600"
              >
                名前
              </label>
              <input
                type="text"
                id="name"
                required
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative p-2 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Eメール
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  本文
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-[#5F5F5F] border-0 py-2 px-8 focus:outline-none hover:bg-[#7dad6a] rounded text-lg">
                送信
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
