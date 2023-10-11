"use client"
import React from 'react'
import Image from 'next/image'
import Button from "./Button"
import { PageWrapper } from "@/app/page-wrapper";
import { motion } from "framer-motion";
import Link from 'next/link';


const Corporative = ({ title, desc, subdesc, subtitle }) => {
    return (
        <section id="corporative" className=' bg-[#fff] px-200 pb-20'>
            <div className='spacer layer2 h-60'></div>
            
            <PageWrapper>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className=' container mx-auto px-1  sm:px-0 '>

                    <div className="md:grid md:grid-cols-2 items-center py-0 px-4 sm:py-0 xl:px-16">
                        <Image alt="corporativeimg" src="/images/corporative.jpg" width={500} height={500}  className='rounded-lg'/>
                        <div className="mt-4  text-left md:mt-0  flex flex-col h-full">

                            <h2 className="lg:text-3xl  sm:text-lg font-bold text-[#f7e64d] mb-4  sm:text-left">{title}</h2>
                            <p className="text-base text-black lg:text-lg    sm:py-0">
                                {desc}
                            </p>
                            <p className="text-base text-black lg:text-lg   sm:text-left">
                                {subdesc}
                            </p>
                            <br />
                            <div className=' button h-10 w-28 rounded-lg bg-[#e7d833] border  border-yellow-300 text-center text-black font-normal hover:bg-transparent duration-500 ' > <Link href={"http://cms.connect.com.ge/Account/Login?ReturnUrl=%2F"}><h1 className='text-center loading-none py-2 font-semibold'>{subtitle}</h1></Link></div>
                            

                        </div>
                    </div>
                </motion.div>

            </PageWrapper>
        </section>
    )
}

export default Corporative; 