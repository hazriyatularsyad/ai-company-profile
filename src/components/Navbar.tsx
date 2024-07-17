"use client"
import Link from "next/link"
import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="w-full z-30 h-[8vh] bg-white text-black shadow-md">
      <div className="flex container items-center justify-between w-full mx-auto p-4">
        <div className="flex-1 cursor-pointer text-[25px] font-bold">
          <Link href="/">
            <h1 className="italic">
              <span className="text-black">Min</span>
              <span className="text-red-500">ang</span>
              <span className="text-yellow-500">Tour.</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center text-right font-medium gap-9 cursor-pointer">
          <Link href="/#home">
            <div className="hover:scale-110 transition duration-300 transform">
              Home
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className="hover:scale-110 transition duration-300 transform">
              About Us
            </div>
          </Link>
          <Link href="#service">
            <div className="hover:scale-110 transition duration-300 transform">
              Services
            </div>
          </Link>
          <Link href="#contact">
            <button
              className="text-red hover:before:bg-red border 
                         border-gray-700 relative h-10 
                         overflow-hidden bg-white px-5 text-gray-700
                         shadow-2xl transition-all before:absolute 
                         before:bottom-0 before:left-0 before:top-0
                         before:z-0 before:h-full before:w-0 
                         before:bg-gray-500 before:transition-all 
                         before:duration-500 hover:text-white 
                         hover:shadow-gray-500 hover:before:left-0 
                         hover:before:w-full"
            >
              <span className="relative z-10"> Contact Us </span>
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <Sidebar />}
    </div>
  )
}
