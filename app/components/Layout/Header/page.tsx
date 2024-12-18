"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/LOGO.png";
import Avatar from "@/public/Ellipse 1.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <Link href="/">
                  <span className="text-2xl font-bold text-blue-600">
                    <Image src={Logo} alt="logo" width={80} height={80} />
                  </span>
                </Link>
              </div>

              <div className="flex space-x-4 px-8">
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
            {/* Hamburger Menu */}
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

            {/* Links */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:block md:ml-4 md:flex md:items-center`}
            >
              <button className="btn btn-active btn-ghost ">ออกจากระบบ</button>
              <button className="btn btn-active btn-neutral ">
                Siriwat Rachanon
                <Image src={Avatar} alt="avatar" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>รายวิชา</a>
            </li>
            <li>
              <a>ถ่ายทอดสด</a>
            </li>
            <li>
              <a>กะทู้คำถาม</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;