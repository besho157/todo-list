'use client';

import Background from "@/components/back-ground/page";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <Background />
     

      <div className="mx-auto grid grid-rows-3  p-8 max-w-4xl text-center">
        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <h1 >
            To-Do List
          </h1>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" >

          <span className="text-blue-600">Stay Organized  , Achieve More.
          </span>
        </h2>
        <h2 className="mt-6 text-lg leading-8 text-gray-600">
          Manage your tasks effortlessly with our simple and powerful To-Do List app.
          Start planning your day now!
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/sign-up" className="relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-600 rounded-lg shadow-md group">
            <span
              className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span
              className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
              Get Started
            </span>
            <span className="relative text-base font-semibold invisible">Button Text</span>
          </Link>

        </div>
      </div>
    </div>

  );
}
