"use client"
import React from 'react'
import Image from 'next/image'
import { PageWrapper } from '@/app/page-wrapper'
import { motion } from "framer-motion";





const Career = ({ title, desc }) => {
    return (

        <section className="text-black bg-white" id="career" >
            {/* <div className='spacer layer2 h-40 '></div> */}
            <br />
            <br />
            <br />
            <br />
            <PageWrapper>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{delay:0.25}}
                  
                    

                    className=' container mx-auto'>
                    <div className="md:grid md:grid-cols-2 gap-8 items-center py-0 px-4 xl:gap-16 sm:py-0 xl:px-16">
                        <div className="mt-4 md:mt-0 text-left flex flex-col h-full" data-aos="fade-up">
                            <h2 className="text-4xl font-bold text-[#e7d833] mb-4 place-self-center text-center sm:text-left">{title}</h2>
                            <p className="mt-10 text-base lg:text-lg place-self-center text-center sm:text-left">
                                {desc}
                            </p>

                        </div>
                        <Image alt='careerimage' src="/images/carrerimg.jpg" width={500} height={500} className="rounded place-self-center" />
                    </div>
                </motion.div>
            </PageWrapper>
        </section>

    )
}

export default Career