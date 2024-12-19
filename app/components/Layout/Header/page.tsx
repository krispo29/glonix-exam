"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/LOGO.png";
import Avatar from "@/public/Ellipse 1.png";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <Link href="/">
                  <span className=" text-2xl font-bold text-blue-600">
                    <Image src={Logo} alt="logo" width={80} height={80} />
                  </span>
                </Link>
              </div>

              <div className="hidden md:flex space-x-4 px-8">
                <Link href="/">
                  <span className="text-slate-400 hover:text-blue-600">
                    รายวิชา
                  </span>
                </Link>
                <Link href="/">
                  <span className="text-slate-400 hover:text-blue-600">
                    ถ่ายทอดสด
                  </span>
                </Link>
                <Link href="/">
                  <span className="text-slate-400 hover:text-blue-600">
                    กะทู้คำถาม
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center">
              <button className="btn btn-active btn-ghost mr-2 rounded-xl">
                ออกจากระบบ
              </button>
              <button className="btn btn-active btn-neutral rounded-xl flex items-center space-x-2">
                <Image src={Avatar} alt="avatar" width={32} height={32} />
                <span>Siriwat Rachanon</span>

                <ChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "fixed inset-0 bg-[#01665e] z-40" : "hidden"
          } md:hidden`}
        >
          {/* Logo Bar */}
          <div className="absolute top-0 left-0 w-full bg-[#01665e] flex items-center justify-between px-4 py-4">
            <Link href="/">
              <span className="text-2xl font-bold text-white">
                <Image src={Logo} alt="logo" width={80} height={80} />
              </span>
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-20">
            <Link href="/">
              <span
                className="text-white hover:text-blue-300 text-xl hover:underline"
                onClick={() => setIsOpen(false)}
              >
                รายวิชา
              </span>
            </Link>
            <Link href="/">
              <span
                className="text-white hover:text-blue-300 text-xl hover:underline"
                onClick={() => setIsOpen(false)}
              >
                ถ่ายทอดสด
              </span>
            </Link>
            <Link href="/">
              <span
                className="text-white hover:text-blue-300 text-xl hover:underline"
                onClick={() => setIsOpen(false)}
              >
                กะทู้คำถาม
              </span>
            </Link>
            <button className="btn btn-active btn-neutral rounded-xl w-[15rem]">
              <Image src={Avatar} alt="avatar" width={32} height={32} />
              <span>Siriwat Rachanon</span>
              <ChevronDown />
            </button>
            <button
              className="btn btn-active rounded-xl w-[15rem] text-black"
              onClick={() => setIsOpen(false)}
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
