"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Products",
    path: "#products",
  },
  {
    title: "career",
    path: "#career",
  },
  {
    title: "Locations",
    path: "#maps",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = ({ about, products, career, locations, contact }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-0 flex-wrap items-center justify-between mx-auto px-4 py-2">

        

          <Link
            href={"/"}
            locale="rus"
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image src='/images/logo.png' height={100} width={100} scal/>
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
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">

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
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;












// {navLinks.map((link, index) => (
//   <li key={index}>
//     <NavLink href={link.path} title={link.title} />
//   </li>
// ))}