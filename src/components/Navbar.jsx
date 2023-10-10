"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'








const Navbar = ({ about, products, career, locations, contact }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className="bg-[#282c2c] lg:px4 fixed mx-auto  border-bottom-black top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="1vh bg-[#282c2c] text-white align-middle  border-bottom-50 overflow-hidden max-height-1vh pt-2">

        <div className="container flex justify-between mx-auto px-5 text-center">
          <div className="item1 flex justify-between px-2"><Image alt="call" src="/images/smartphone.png" width={20} height={10} /> <p className="text-sm text-center flex  px-2 justify-between italic text-[#cecece]">call  + 032 219 33 39</p></div>
          <div className="item2 flex justify-between gap-2">
            <Link href={"/geo"}><Image src='/images/georgia.png' height={10} width={22} /></Link>
            <Link href={"/"}><Image src='/images/flag.png' height={10} width={22} /></Link>
            <Link href={"/rus"}><Image src='/images/russia.png' height={10} width={22} /></Link>           
          </div>
        </div>
      </div>




      
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">



        <Link
          href={"/"}
          locale="rus"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src='/images/logoo.png' height={70} width={70} scal />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-3">

            <li>
              <NavLink href="#about" locale="rus" title={about} />
            </li>
            <li>
              <NavLink href="#products" title={products} />
            </li>
            <li>
              <NavLink href="#career" title={career} />
            </li>
            <li>
              <NavLink href="#maps" title={locations} />
            </li>
            <li>
              <NavLink href="#contact" title={contact} />
            </li>




          </ul>
        </div>
      </div>
      {navbarOpen ? <ul className="flex flex-col py-4 items-center">
        <li>
          <NavLink href="#about" locale="rus" title={about} />
        </li>
        <li>
          <NavLink href="#products" title={products} />
        </li>
        <li>
          <NavLink href="#career" title={career} />
        </li>
        <li>
          <NavLink href="#maps" title={locations} />
        </li>
        <li>
          <NavLink href="#contact" title={contact} />
        </li>

      </ul> : null}
    </nav>
  );
};

export default Navbar;










