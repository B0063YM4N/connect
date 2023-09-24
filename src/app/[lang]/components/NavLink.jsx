import React from 'react'
import Link from 'next/link'

const NavLink = ({href,title}) => {
  return (
    <Link href={href}  className=' nav-link block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-[#f7f446]'>{title}</Link>
  )
}

export default NavLink