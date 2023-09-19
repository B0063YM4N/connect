
import React from "react";
import Image from "next/image";



const AboutSection = ({desc, subdesc, title, subtitle}) => {



    return (
        <section className="text-white" id="about">
            
            <div className=' container mx-auto px-12 '>

                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <Image alt="aboutimage" src="/images/aboutimg.jpg" width={500} height={500} className="rounded" />
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl  font-bold text-black mb-4 place-self-center text-center sm:text-left">{title}</h2>
                        <p className="text-base text-black lg:text-lg place-self-center text-center sm:text-left">
                           {desc}
                        </p>
                        <br/>
                        <h2 className="text-3xl font-bold text-black mb-4 place-self-center text-center sm:text-left">{subtitle}</h2>
                        <p className="text-base text-black lg:text-lg place-self-center text-center sm:text-left">
                           {subdesc}
                        </p>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default AboutSection;