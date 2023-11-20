import React from 'react'
import Link from 'next/link'

const CustomButton = ({title , href}) => {
  return (
    <div className='location-button button h-10 w-28 rounded-lg bg-[#e7d833]  text-center text-black font-normal ' > <Link href={href}><h1 className='text-center loading-none py-2 font-semibold'>{title}</h1></Link></div>
  )
}

export default CustomButton