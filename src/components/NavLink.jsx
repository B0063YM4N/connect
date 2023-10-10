import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>

      <Link href={href} className=' nav-link block py-2 pl-3 pr-4 text-[#fff] sm:tex rounded md:p-0 hover:text-[#f7f446]'>{title}</Link>
    </motion.div>
  )
}

export default NavLink