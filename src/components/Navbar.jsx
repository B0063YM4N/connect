"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image"











const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className="bg-[#282c2c] lg:px4 fixed mx-auto  border-bottom-black top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="1vh bg-[#282c2c] text-white align-middle  border-bottom-50 overflow-hidden max-height-1vh pt-2">

        <div className="container flex justify-between mx-auto px-5 text-center">
          <div></div>
          <div className="item2 flex place-content-end flex-end justify-between gap-2">
            <Link href={"/geo"} ><Image alt="geo" src='/images/georgia.png' height={10} width={22} /></Link>
            <Link href={"/"} ><Image alt="en" src='/images/flag.png' height={10} width={22} /></Link>
            <Link href={"/rus"}><Image  alt="rus" src='/images/russia.png' height={10} width={22} /></Link>
          </div>
        </div>
      </div>





      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-2">



        <Link
          href={"/"}
          locale="rus"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image alt="logo" src='/images/logoo.png' height={70} width={70} scal />
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
              <NavLink href="about" locale="rus"  title={props.about} />
            </li>
            <li>
              <NavLink href="products" title={props.products} />
            </li>
            <li>
              <NavLink href="career" title={props.career} />
            </li>
            <li>
              <NavLink href="maps" title={props.locations} />
            </li>
              <li>
                <NavLink href="corporative" title={props.corporative} />
              </li>
            <li>
              <NavLink href="contact" title={props.contact} />
            </li>




          </ul>
        </div>
      </div>
      {navbarOpen ? <ul className="flex flex-col py-4 items-center">
        <li>
          <NavLink href="about" locale="rus" title={props.about} />
        </li>
        <li>
          <NavLink href="products" title={props.products} />
        </li>
        <li>
          <NavLink href="career" title={props.career} />
        </li>
        <li>
          <NavLink href="maps" title={props.locations} />
        </li>
          <li>
            <NavLink href="corporative" title={props.corporative} />
          </li>
        <li>
          <NavLink href="contact" title={props.contact} />
        </li>

      </ul> : null}
    </nav>
  );
};

export default Navbar;










