import React from 'react'
// import Link from 'next/link'
import {Link} from "react-scroll"
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>

      <Link to={href} smooth={true}  duration={500} className='cursor-pointer duration-600 nav-link block py-2 pl-3 pr-4 text-[#fff] sm:tex rounded md:p-0 hover:text-[#f7f446]'>{title}</Link>
    </motion.div>
  )
}

export default NavLink