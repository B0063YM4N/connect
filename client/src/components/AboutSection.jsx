"use client"
import React from "react";
import Image from "next/image";
import { PageWrapper } from "@/app/page-wrapper";
import { motion } from "framer-motion";



const AboutSection = ({ desc, subdesc, title, subtitle }) => {



    return (
        <section className="text-white" id="about">
            <div className='spacer layer2 h-40 '></div>
            <PageWrapper>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className=' container mx-auto px-12  sm:px-0 '>

                    <div className="md:grid md:grid-cols-2 items-center py-0 px-4 sm:py-0 xl:px-16">
                        <Image  alt="aboutimage" src="/images/aboutimg.jpg" width={500} height={500} className="rounded" />
                        <div className="mt-4  text-left md:mt-0  flex flex-col h-full">
                        
                            <h2 className="text-4xl font-bold text-[#e7d833] mb-4 place-self-center text-center sm:text-left"> {title}</h2>
                              <br />
                            <p className="text-base text-black lg:text-lg    sm:py-0">
                                {desc}
                            </p>
                            <br />
                            <h2 className="text-3xl font-bold text-[#e7d833] mb-4  sm:text-left">{subtitle}</h2>
                            <p className="text-base text-black lg:text-lg   sm:text-left">
                                {subdesc}
                            </p>

                        </div>
                    </div>
                </motion.div>

            </PageWrapper>

        </section>
    );
};

export default AboutSection;